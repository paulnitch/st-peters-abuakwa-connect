import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock } from 'lucide-react';
import { format } from 'date-fns';

interface Announcement {
  id: string;
  title: string;
  content: string;
  priority: 'low' | 'normal' | 'high' | 'urgent';
  created_at: string;
}

const priorityColors = {
  low: 'bg-muted text-muted-foreground',
  normal: 'bg-primary/10 text-primary',
  high: 'bg-secondary text-secondary-foreground',
  urgent: 'bg-destructive text-destructive-foreground',
};

export default function Announcements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const { data, error } = await supabase
        .from('announcements')
        .select(`
          id,
          title,
          content,
          priority,
          created_at
        `)
        .eq('is_published', true)
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      setAnnouncements((data || []) as Announcement[]);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Church Announcements</h2>
            <p className="text-muted-foreground">Loading announcements...</p>
          </div>
        </div>
      </section>
    );
  }

  if (announcements.length === 0) {
    return (
      <section className="py-16 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Church Announcements</h2>
            <p className="text-muted-foreground">No announcements at this time.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Church Announcements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news and announcements from our parish community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {announcements.map((announcement) => (
            <Card key={announcement.id} className="h-full">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg leading-tight">
                    {announcement.title}
                  </CardTitle>
                  <Badge className={priorityColors[announcement.priority]}>
                    {announcement.priority}
                  </Badge>
                </div>
                <CardDescription className="flex items-center gap-2 text-sm">
                  <CalendarDays className="h-4 w-4" />
                  {format(new Date(announcement.created_at), 'MMM dd, yyyy')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-4">
                  {announcement.content}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Church Administration</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}