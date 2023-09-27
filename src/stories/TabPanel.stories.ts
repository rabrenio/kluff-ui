import type { StoryObj, Meta } from '@storybook/react'
import TabPanel, { type TabPanelProps } from '../components/TabPanel'

const meta: Meta<TabPanelProps> = {
  title: 'Basic/TabPanel',
  tags: ['autodocs'],
  component: TabPanel,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children:
      'Commodo deserunt cupidatat aute incididunt amet minim et nisi elit cupidatat ullamco excepteur quis consectetur.',
  },
}
