import React, { useContext } from 'react'
import { InsertDropdownMenu } from './insert-dropdown-menu'
import { ToolbarGroup } from './toolbar'
import { MarksPopoverToolbarButton } from './marks-popover-toolbar-button'
import { ImageToolbarButton } from './image-toolbar-button'
import { ListToolbarButton } from './list-toolbar-button'
import { ELEMENT_OL, ELEMENT_UL } from '@udecode/plate-list'
import { SaveToolbarButton } from './save-toolbar-button'
import { useEditorRef } from '@udecode/plate-common'
import { TagPopoverToolbarButton } from './tag-popover-toolbar-button'
import type { TagsEntity } from '@/types/tags'

interface FixedToolbarButtonsProps {
  selectedTags: TagsEntity[]
  setSelectedTags: React.Dispatch<React.SetStateAction<TagsEntity[]>>
}
export const FixedToolbarButtons: React.FC<FixedToolbarButtonsProps> = React.memo(
  ({ selectedTags, setSelectedTags }) => {
    const editor = useEditorRef()

    return (
      <div className='w-full overflow-hidden'>
        <div
          className='flex flex-wrap'
          style={{
            transform: 'translateX(calc(-1px))'
          }}
        >
          <ToolbarGroup noSeparator>
            <InsertDropdownMenu />
            <ImageToolbarButton />
          </ToolbarGroup>

          <ToolbarGroup>
            <MarksPopoverToolbarButton />
            <ListToolbarButton nodeType={ELEMENT_UL} />
            <ListToolbarButton nodeType={ELEMENT_OL} />
          </ToolbarGroup>

          <ToolbarGroup>
            {/* <MentionsToolbarButton /> */}
            <TagPopoverToolbarButton selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
          </ToolbarGroup>

          <div className='grow' />
          <ToolbarGroup noSeparator>
            <SaveToolbarButton editor={editor} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
          </ToolbarGroup>
        </div>
      </div>
    )
  }
)
