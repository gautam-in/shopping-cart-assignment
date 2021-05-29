import React from "react";
import { shallow } from "enzyme";
import Dialog from "./Dialog";
import { findByTestAttr } from "../../../../test/testUtils";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Dialog {...props} />);
};

test("Dialog renders without error", () => {
  const wrapper = setup({ dialog: true });
  const dialog = findByTestAttr(wrapper, "component-dialog");
  expect(dialog.length).toBe(1);
});

test("check if dialog closes when clicking on icon", () => {
  const clickMock = jest.fn();
  const wrapper = setup({ setDialog: clickMock });
  const button = findByTestAttr(wrapper, "dialog-span");
  button.simulate("click");
  expect(clickMock).toHaveBeenCalled();
});

test("check if dialog closes when clicking on cancel", () => {
  const clickMock = jest.fn();
  const wrapper = setup({ setDialog: clickMock });
  const button = findByTestAttr(wrapper, "dialog-cancel");
  button.simulate("click");
  expect(clickMock.mock.calls.length).toBe(1);
});

test("check if callback working onclick of confirm button", () => {
  const clickMock = jest.fn();
  const wrapper = setup({ onDialogConfirm: clickMock });
  const button = findByTestAttr(wrapper, "dialog-confirm");
  button.simulate("click");
  expect(clickMock.mock.calls.length).toBe(1);
});
