import { Editor } from 'slate';
import { createTable, TableOption } from '../create-table';
import { Option, defaultOptions } from '../option';

export function insertTable(
  opts: Required<Option> = defaultOptions,
  editor: Editor,
  columns = 2,
  rows = 2,
  tableOption?: TableOption,
) {
  const { value } = editor;

  if (!value.selection.start.key) return false;
  const table = createTable(opts, columns, rows, tableOption);
  return editor.insertBlock(table);
}