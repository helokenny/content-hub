import { queryOptions } from '@tanstack/react-query';
import { userService } from '../services/user.service';
import { userKeys } from './user-keys';

export const userQuery = (userId: number) =>
  queryOptions({
    queryKey: userKeys.detail(userId),
    queryFn: () => userService.getUser(userId),
    enabled: userId > 0,
  });
