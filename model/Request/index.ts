export interface RequestStatus {
  status: 'idle' | 'succeeded' | 'failed' | 'pending';
  message?: string;
}

export const requestStatus: RequestStatus = {
  status: 'idle',
};
