export interface IHubConnection {
  connect: (hub: string) => Promise<void>;
  close: () => Promise<void>;
}
