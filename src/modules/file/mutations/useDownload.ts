import { useMutation } from 'react-query';

import * as Api from '../api';

const useDownload = () =>
  useMutation<any, string, { uuid: string }, any>(async ({ uuid }) => Api.Download({ uuid }));

export default useDownload;
