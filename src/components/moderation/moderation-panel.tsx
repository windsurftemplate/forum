import * as React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { useModerationStore } from '@/store/moderation-store'

export function ModerationPanel() {
  const { reports, bannedUsers, resolveReport, unbanUser, removeContent } = useModerationStore()

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Moderation Panel</CardTitle>
        <CardDescription>
          Manage reports, banned users, and moderate content
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="reports">
          <TabsList>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="banned">Banned Users</TabsTrigger>
          </TabsList>

          <TabsContent value="reports">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Reporter</TableHead>
                  <TableHead>Reported User</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell>{report.reporterUserId}</TableCell>
                    <TableCell>{report.reportedUserId}</TableCell>
                    <TableCell>{report.reason}</TableCell>
                    <TableCell>{report.status}</TableCell>
                    <TableCell>
                      {report.status === 'pending' && (
                        <div className="flex gap-2">
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => {
                              resolveReport(report.id, 'resolve')
                              if (report.threadId) {
                                removeContent('thread', report.threadId)
                              } else if (report.commentId) {
                                removeContent('comment', report.commentId)
                              }
                            }}
                          >
                            Remove Content
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => resolveReport(report.id, 'dismiss')}
                          >
                            Dismiss
                          </Button>
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="banned">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User ID</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Banned At</TableHead>
                  <TableHead>Ban Duration</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bannedUsers.map((user) => (
                  <TableRow key={user.userId}>
                    <TableCell>{user.userId}</TableCell>
                    <TableCell>{user.reason}</TableCell>
                    <TableCell>{new Date(user.bannedAt).toLocaleDateString()}</TableCell>
                    <TableCell>
                      {user.bannedUntil
                        ? `Until ${new Date(user.bannedUntil).toLocaleDateString()}`
                        : 'Permanent'}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => unbanUser(user.userId)}
                      >
                        Unban
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
