import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { Tag as TagComp } from "./Tag";

type TagProps = typeof TagComp;

export default {
  title: "DPL Design System / Tag",
  component: TagComp,
  decorators: [withDesign],
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=836%3A5757",
  },
};

const Template: ComponentStory<TagProps> = (args) => <TagComp {...args} />;

export const Tag = Template.bind({});
Tag.args = {
  label: "Vi anbefaler",
  removable: false,
};

export const TagRemovable = Template.bind({});
TagRemovable.args = {
  label: "Litteratur",
  removable: true,
};