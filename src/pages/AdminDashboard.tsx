import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Plus, Edit, Trash2, Eye, EyeOff, LogOut } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { format } from 'date-fns';

interface Announcement {
  id: string;
  title: string;
  content: string;
  priority: 'low' | 'normal' | 'high' | 'urgent';
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

const priorityColors = {
  low: 'bg-muted text-muted-foreground',
  normal: 'bg-primary/10 text-primary',
  high: 'bg-secondary text-secondary-foreground',
  urgent: 'bg-destructive text-destructive-foreground',
};

export default function AdminDashboard() {
  const { user, isAdmin, loading: authLoading, signOut } = useAuth();
  const { toast } = useToast();
  
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingAnnouncement, setEditingAnnouncement] = useState<Announcement | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    priority: 'normal' as 'low' | 'normal' | 'high' | 'urgent',
    is_published: false,
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!authLoading && user && isAdmin) {
      fetchAnnouncements();
    }
  }, [user, isAdmin, authLoading]);

  // Redirect if not authenticated or not admin
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>
              You don't have administrator privileges to access this page.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => window.location.href = '/'}>
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const fetchAnnouncements = async () => {
    try {
      const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAnnouncements((data || []) as Announcement[]);
    } catch (error) {
      console.error('Error fetching announcements:', error);
      toast({
        title: "Error",
        description: "Failed to fetch announcements.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      if (editingAnnouncement) {
        const { error } = await supabase
          .from('announcements')
          .update({
            title: formData.title,
            content: formData.content,
            priority: formData.priority,
            is_published: formData.is_published,
          })
          .eq('id', editingAnnouncement.id);

        if (error) throw error;

        toast({
          title: "Success",
          description: "Announcement updated successfully.",
        });
      } else {
        const { error } = await supabase
          .from('announcements')
          .insert({
            title: formData.title,
            content: formData.content,
            priority: formData.priority,
            is_published: formData.is_published,
            author_id: user.id,
          });

        if (error) throw error;

        toast({
          title: "Success",
          description: "Announcement created successfully.",
        });
      }

      setIsDialogOpen(false);
      setEditingAnnouncement(null);
      resetForm();
      fetchAnnouncements();
    } catch (error) {
      console.error('Error saving announcement:', error);
      toast({
        title: "Error",
        description: "Failed to save announcement.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (announcement: Announcement) => {
    setEditingAnnouncement(announcement);
    setFormData({
      title: announcement.title,
      content: announcement.content,
      priority: announcement.priority,
      is_published: announcement.is_published,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this announcement?')) return;

    try {
      const { error } = await supabase
        .from('announcements')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Announcement deleted successfully.",
      });

      fetchAnnouncements();
    } catch (error) {
      console.error('Error deleting announcement:', error);
      toast({
        title: "Error",
        description: "Failed to delete announcement.",
        variant: "destructive",
      });
    }
  };

  const togglePublished = async (announcement: Announcement) => {
    try {
      const { error } = await supabase
        .from('announcements')
        .update({ is_published: !announcement.is_published })
        .eq('id', announcement.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: `Announcement ${!announcement.is_published ? 'published' : 'unpublished'} successfully.`,
      });

      fetchAnnouncements();
    } catch (error) {
      console.error('Error toggling announcement:', error);
      toast({
        title: "Error",
        description: "Failed to update announcement.",
        variant: "destructive",
      });
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      priority: 'normal' as 'low' | 'normal' | 'high' | 'urgent',
      is_published: false,
    });
  };

  const handleNewAnnouncement = () => {
    setEditingAnnouncement(null);
    resetForm();
    setIsDialogOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex gap-4">
            <Button onClick={() => window.location.href = '/'} variant="outline">
              View Site
            </Button>
            <Button onClick={signOut} variant="outline">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Announcements</h2>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={handleNewAnnouncement}>
                <Plus className="h-4 w-4 mr-2" />
                New Announcement
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>
                  {editingAnnouncement ? 'Edit Announcement' : 'Create New Announcement'}
                </DialogTitle>
                <DialogDescription>
                  {editingAnnouncement ? 'Update the announcement details.' : 'Create a new announcement for the church community.'}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={6}
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <Select
                      value={formData.priority}
                      onValueChange={(value: 'low' | 'normal' | 'high' | 'urgent') =>
                        setFormData({ ...formData, priority: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="published">Published</Label>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="published"
                        checked={formData.is_published}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, is_published: checked })
                        }
                      />
                      <Label htmlFor="published" className="text-sm text-muted-foreground">
                        {formData.is_published ? 'Published' : 'Draft'}
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={submitting}>
                    {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {editingAnnouncement ? 'Update' : 'Create'}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-4">
          {announcements.map((announcement) => (
            <Card key={announcement.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {announcement.title}
                      <Badge className={priorityColors[announcement.priority]}>
                        {announcement.priority}
                      </Badge>
                      {announcement.is_published ? (
                        <Eye className="h-4 w-4 text-green-600" />
                      ) : (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      )}
                    </CardTitle>
                    <CardDescription>
                      Created: {format(new Date(announcement.created_at), 'MMM dd, yyyy HH:mm')}
                      {announcement.updated_at !== announcement.created_at && (
                        <span className="ml-2">
                          • Updated: {format(new Date(announcement.updated_at), 'MMM dd, yyyy HH:mm')}
                        </span>
                      )}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => togglePublished(announcement)}
                    >
                      {announcement.is_published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(announcement)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(announcement.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{announcement.content}</p>
              </CardContent>
            </Card>
          ))}

          {announcements.length === 0 && (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-muted-foreground">No announcements yet. Create your first one!</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}