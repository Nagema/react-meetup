/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import { Meetups } from "../../context/MeetupsContext";
import MeetupItem from "./MeetupItem";

function renderMeetUpItem() {
  return (
    <Meetups.Provider>
        <MeetupItem />
    </Meetups.Provider>
  );
}

test("<MeetupItem/> renders without crashing", () => {
  const wrapper = shallow(renderMeetUpItem());
  expect(wrapper.exists()).toBe(true);
});
