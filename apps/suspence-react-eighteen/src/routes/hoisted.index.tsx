import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';

// @ts-ignore
export const Route = createFileRoute('/hoisted/')({
  component: HoistedIndexComponent,
});

function HoistedIndexComponent() {
  return (
    <div className="p-2">
      <h3>Hoisted fetches here</h3>
    </div>
  );
}
