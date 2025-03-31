import { mockServiceProviders, mockUsers } from '../mockData';

export const fetchNearbyGarages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockServiceProviders.filter(provider => provider.type === "garage"));
    }, 1000);
  });
};

export const fetchUserProfile = (userId: string) => {
  return Promise.resolve(mockUsers.find(user => user.id === userId));
};
