import { Device } from '../types/network';

export const mockDevices: Device[] = [
  {
    id: '1',
    name: 'Desktop-PC1',
    ipAddress: '192.168.1.100',
    macAddress: '00:1A:2B:3C:4D:5E',
    status: 'online',
    lastSeen: new Date().toISOString(),
    deviceType: 'Desktop',
    ports: [
      { number: 80, protocol: 'TCP', status: 'open', service: 'HTTP' },
      { number: 443, protocol: 'TCP', status: 'open', service: 'HTTPS' },
      { number: 22, protocol: 'TCP', status: 'closed', service: 'SSH' }
    ]
  },
  {
    id: '2',
    name: 'Laptop-User2',
    ipAddress: '192.168.1.101',
    macAddress: '00:2B:3C:4D:5E:6F',
    status: 'online',
    lastSeen: new Date().toISOString(),
    deviceType: 'Laptop',
    ports: [
      { number: 80, protocol: 'TCP', status: 'open', service: 'HTTP' },
      { number: 3389, protocol: 'TCP', status: 'closed', service: 'RDP' }
    ]
  }
];