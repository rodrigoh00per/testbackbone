import styled from 'styled-components'
import { Trash } from '@styled-icons/bootstrap/Trash'
import { Edit } from '@styled-icons/boxicons-solid/Edit'

export const TrashIcon = styled(Trash)`
  width: 30px;
  height: 30px;
  fill: red;
  cursor: pointer;
`

export const EditIcon = styled(Edit)`
  width: 30px;
  height: 30px;
  fill: orange;
  cursor: pointer;
  margin-right: 5px;
`
