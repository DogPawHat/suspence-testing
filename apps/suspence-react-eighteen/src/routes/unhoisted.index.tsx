import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';

// @ts-ignore
export const Route = createFileRoute('/unhoisted/')({
  component: UnhoistedIndexComponent,
});

function UnhoistedIndexComponent() {
  return (
    <div className="p-2">
      <h3>Unhoisted fetches here</h3>
    </div>
  );
}
