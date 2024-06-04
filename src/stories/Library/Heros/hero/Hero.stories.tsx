import { ComponentStory, ComponentMeta } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import Hero from "./Hero";
import ImageCredited from "../../image-credited/ImageCredited";

export default {
  title: "Library / Hero",
  component: Hero,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?type=design&node-id=7477-39243&mode=dev",
    },
  },
  argTypes: {
    image: {
      defaultValue: (
        <ImageCredited
          src="https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZXZlbnR8fHx8fHwxNzAyOTEwMzE0&ixlib=rb-4.0.3&q=8
0&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
          description="Photo by Unsplash"
          year="©2021"
        />
      ),
    },
    placeholderText: {
      defaultValue: "Stine Pilgaard vinder De Gyldne Laurbær",
      type: "string",
    },
    contentType: {
      name: "Type",
      defaultValue: "Arrangement",
      control: { type: "text" },
    },
    date: {
      name: "Date",
      defaultValue: "06 Dec 2022",
      control: { type: "text" },
    },
    title: {
      name: "Title",
      defaultValue: "Stine Pilgaard vinder De Gyldne Laurbær",
      control: { type: "text" },
    },
    description: {
      name: "Description",
      defaultValue:
        "Boghandlernes store bogpris - De Gyldne går denne gang til Stine Pilgaard for hendes roman 'Meter i sekundet'. Stort tillykke til Stine Pilgaard.",
      control: { type: "text" },
    },
    descriptionItems: {
      Type: { value: ["Bog"], type: "standard" },
      Sprog: { value: ["Dansk"], type: "standard" },
    },
  },
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
