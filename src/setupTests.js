import Enzyme from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Route, Routes } from "react-router-dom";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const recursiveGetPathMap = (route, parentPath) => {
    let pathMap = {};
    const routeProps = route.props();
    let path = parentPath + (parentPath.length == 0 || parentPath[parentPath.length-1] == '/' ? '' : '/') + routeProps.path;
    pathMap[path] = routeProps.element.type;
    route.children(Route).forEach(el=>{
      pathMap = {...pathMap, ...recursiveGetPathMap(el, path)};
    });
    return pathMap;
  }
  
  global.getPathMap = (wrapper)=>{
  
    let pathMap = {};
    wrapper.find(Routes).children(Route).forEach(el =>{
      pathMap = {...pathMap, ...recursiveGetPathMap(el, "")};
    });
  
    return pathMap;
  }

  export default recursiveGetPathMap