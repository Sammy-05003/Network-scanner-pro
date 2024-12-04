export interface Device {
  id: string;
  name: string;
  ipAddress: string;
  macAddress: string;
  status: 'online' | 'offline';
  lastSeen: string;
  deviceType: string;
  ports: Port[];
}

export interface Port {
  number: number;
  protocol: string;
  status: 'open' | 'closed';
  service: string;
}