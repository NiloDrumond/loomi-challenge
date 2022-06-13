export type CategoryValueData = { category: string; value: number };

export type SexData = {
  male: number;
  female: number;
};

export type UsersResumeData = {
  transactionsPerAge: CategoryValueData[];
  sessionsPerSex: SexData;
  transactionsPerClientType: CategoryValueData[];
};
