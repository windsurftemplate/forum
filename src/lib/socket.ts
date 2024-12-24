import { io, Socket } from 'socket.io-client'

class SocketService {
  private static instance: SocketService
  private socket: Socket | null = null

  private constructor() {
    this.socket = io('http://localhost:3001', {
      autoConnect: false,
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    })

    this.socket.on('connect', () => {
      console.log('Connected to WebSocket server')
    })

    this.socket.on('disconnect', () => {
      console.log('Disconnected from WebSocket server')
    })

    this.socket.on('error', (error) => {
      console.error('WebSocket error:', error)
    })
  }

  public static getInstance(): SocketService {
    if (!SocketService.instance) {
      SocketService.instance = new SocketService()
    }
    return SocketService.instance
  }

  public connect() {
    if (this.socket) {
      this.socket.connect()
    }
  }

  public disconnect() {
    if (this.socket) {
      this.socket.disconnect()
    }
  }

  public emit(event: string, data: any) {
    if (this.socket) {
      this.socket.emit(event, data)
    }
  }

  public on(event: string, callback: (data: any) => void) {
    if (this.socket) {
      this.socket.on(event, callback)
    }
  }

  public off(event: string, callback: (data: any) => void) {
    if (this.socket) {
      this.socket.off(event, callback)
    }
  }
}

export const socketService = SocketService.getInstance()
