import type { Tag } from '@/types/tags'
import React, { createContext, useContext, useState } from 'react'

export interface TagsContextType {
  selectedTags: Tag[]
  setSelectedTags: React.Dispatch<React.SetStateAction<Tag[]>>
}

interface TagsProviderProps {
  children: React.ReactNode
}

const defaultTagsContext: TagsContextType = {
  selectedTags: [],
  setSelectedTags: () => {}
}

export const SelectedTagsContext = createContext<TagsContextType>(defaultTagsContext)

export const useSelectedTagsContext = () => {
  const context = useContext(SelectedTagsContext)
  if (!context) {
    throw new Error('useTagsContext must be used within an SelectedTagsProvider')
  }
  return context
}

export const SelectedTagsProvider: React.FC<TagsProviderProps> = ({ children }) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])

  return (
    <SelectedTagsContext.Provider value={{ selectedTags, setSelectedTags }}>{children}</SelectedTagsContext.Provider>
  )
}
