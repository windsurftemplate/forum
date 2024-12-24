import { io, Socket } from 'socket.io-client'

class SocketService {
  private static instance: SocketService
  private socket: Socket | null = null

  private constructor() {
    // Only initialize socket in browser environment
    if (typeof window !== 'undefined') {
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
    }
  }

  public static getInstance(): SocketService {
    if (!SocketService.instance) {
      SocketService.instance = new SocketService()
    }
    return SocketService.instance
  }

  public connect(): void {
    if (this.socket && !this.socket.connected) {
      this.socket.connect()
    }
  }

  public disconnect(): void {
    if (this.socket) {
      this.socket.disconnect()
    }
  }

  public emit(event: string, data: any): void {
    if (this.socket) {
      this.socket.emit(event, data)
    } else {
      console.warn('Socket not initialized')
    }
  }

  public on(event: string, callback: (...args: any[]) => void): void {
    if (this.socket) {
      this.socket.on(event, callback)
    } else {
      console.warn('Socket not initialized')
    }
  }

  public off(event: string, callback?: (...args: any[]) => void): void {
    if (this.socket) {
      this.socket.off(event, callback)
    }
  }
}

export const socketService = SocketService.getInstance()
