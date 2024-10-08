import Shortcut from '@/components/keyboard-shortcut';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

function ShortcutRow({ keys, description }: { keys: string[]; description: string }) {
  return (
    <div className="grid grid-cols-4 w-full py-2">
      <p className="col-span-1">
        <Shortcut keys={keys} />
      </p>
      <p className="col-span-3">{description}</p>
    </div>
  );
}

export default function KeyboardShortcutsDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Keyboard Shortcuts</DialogTitle>
          <DialogDescription asChild>
            <div>
              <h5 className="font-semibold pt-4 pb-2">Global</h5>
              <ShortcutRow keys={['?']} description="show this dialog" />
              <ShortcutRow keys={['mod', ';']} description="open Srcbook settings" />
              <ShortcutRow keys={['mod', 'i']} description="open NPM package install modal" />
              <h5 className="font-semibold pt-6 pb-2">Markdown edit</h5>
              <ShortcutRow keys={['esc']} description="switch back to preview mode" />
              <ShortcutRow keys={['mod', '↵']} description="switch back to preview mode" />
              <h5 className="font-semibold pt-6 pb-2">Code cell edit</h5>
              <ShortcutRow keys={['mod', '↵']} description="run cell" />
              <ShortcutRow keys={['mod', '/']} description="toggle lines comment" />
              <ShortcutRow keys={['alt', '↑']} description="move lines up" />
              <ShortcutRow keys={['alt', '↓']} description="move lines down" />
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
