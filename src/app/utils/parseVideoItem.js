import { v4 as uuid } from 'uuid';
import prettyBytes from 'pretty-bytes';
import formats from '../../formats';

function parseVideoItem({ name, path, type, size }) {
  return {
    id: uuid(),
    name,
    path,
    type,
    size: prettyBytes(size),
    outputFormat: formats[0],
    outputDir: '',
    progress: 0,
    status: 'awaiting' // awaiting, converting, finished
  };
}

export default parseVideoItem;
