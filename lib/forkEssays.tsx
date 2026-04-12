import { ReactNode } from 'react';

interface ForkEssayData {
  title: string;
  content: ReactNode;
}

export const forkEssays: Record<string, ForkEssayData> = {
  conducting: {
    title: 'Conducting',
    content: (
      <>
        <p>
          Placeholder — Adrian will write about conducting here. The baton, the orchestra, the
          precision and expression, leading without speaking, the ensemble as a living thing.
        </p>
        <p>
          What it taught about leadership, listening, and the shape of his mind.
        </p>
      </>
    ),
  },
  food: {
    title: 'Kitchens',
    content: (
      <>
        <p>
          Placeholder — Adrian will write about staging at Michelin-starred kitchens here.
          The hierarchy, the craft, the liberation of total focus, hospitality as philosophy.
        </p>
        <p>
          Seven restaurants. What each one meant. What the kitchen taught about work, teams, and care.
        </p>
      </>
    ),
  },
  transferring: {
    title: 'Transferring',
    content: (
      <>
        <p>
          Placeholder — Adrian will write about the decision to transfer here. UIUC to Northwestern.
          A monumental choice worth someone knowing about.
        </p>
        <p>
          Why he left, what he was looking for, and what he found.
        </p>
      </>
    ),
  },
  volleyball: {
    title: 'Volleyball',
    content: (
      <>
        <p>
          Placeholder — Adrian will write about volleyball here. Team dynamics, culture-building,
          mentality over strategy, coaching instincts.
        </p>
        <p>
          What it means to lead a team, diagnose group dynamics, and earn trust through action.
        </p>
      </>
    ),
  },
};
