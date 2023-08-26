import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function SupportForm() {
  return (
    <Card className=" w-1/2">
      <CardHeader>
        <CardTitle>Contact us</CardTitle>
        <CardDescription>
          Submit a form and let us know what you're thinking
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="name" placeholder="your@email.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Your feedback</Label>
              <Input
                id="name"
                placeholder="Enter text here..."
                className="pb-36 pt-4"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
}
