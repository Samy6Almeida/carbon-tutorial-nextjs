'use client';

import TutorialHeader from '@/components/TutorialHeader';
import { Content } from '@carbon/react';
import { Content, Theme } from '@carbon/react';

export function Providers({ children }) {
  return (
    <div>
      <TutorialHeader />
      <Content>{children}</Content>
    </div>
  );
}

<div>
  <Theme theme="g100">
    <TutorialHeader />
  </Theme>
  <Content>{children}</Content>
</div>;
