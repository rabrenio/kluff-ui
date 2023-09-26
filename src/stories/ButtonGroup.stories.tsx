import { PlusOne } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Button, ButtonGroup, type ButtonGroupProps } from '@mui/material'
import type { StoryObj, Meta } from '@storybook/react'
import { Link, MemoryRouter } from 'react-router-dom'

const meta: Meta<ButtonGroupProps> = {
  title: 'Basic/ButtonGroup',
  tags: ['autodocs'],
  component: ButtonGroup,
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: (
      <>
        <Button>btn 1</Button>
        <Button>btn 2</Button>
      </>
    ),
  },
}

export const WithLink: Story = {
  args: {
    children: (
      <MemoryRouter>
        <LoadingButton>
          <PlusOne /> Add
        </LoadingButton>
        <Button to="/test" component={Link}>
          link 1
        </Button>
        <Button>btn 1</Button>
        <Button to="/test" component={Link}>
          link 2
        </Button>
        <Button>btn 2</Button>
      </MemoryRouter>
    ),
  },
}
