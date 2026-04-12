export interface TrunkNode {
  id: string;
  label: string;
  x: number;
  type: 'trunk';
}

export interface ForkNode {
  id: string;
  label: string;
  x: number;
  direction: 'up' | 'down';
  type: 'fork';
  essaySlug: string;
}

export type TimelineNode = TrunkNode | ForkNode;

export const TIMELINE_WIDTH = 2400;
export const TRUNK_Y = 175;
export const FORK_OFFSET = 120;

export const timelineNodes: TimelineNode[] = [
  // Trunk nodes
  { id: 'freshman', label: 'Freshman Year', x: 120, type: 'trunk' },
  { id: 'aps', label: 'AP Classes', x: 300, type: 'trunk' },

  // Fork: Conducting (branches up)
  { id: 'conducting', label: 'Conducting', x: 460, direction: 'up', type: 'fork', essaySlug: 'conducting' },

  { id: 'junior', label: 'Junior Year', x: 620, type: 'trunk' },

  // Fork: Food (branches down)
  { id: 'food', label: 'Kitchens', x: 820, direction: 'down', type: 'fork', essaySlug: 'food' },

  { id: 'senior', label: 'Senior Year', x: 1000, type: 'trunk' },
  { id: 'uiuc', label: 'UIUC', x: 1180, type: 'trunk' },

  // Fork: Transferring (branches up)
  { id: 'transferring', label: 'Transferring', x: 1380, direction: 'up', type: 'fork', essaySlug: 'transferring' },

  { id: 'northwestern', label: 'Northwestern', x: 1580, type: 'trunk' },

  // Fork: Volleyball (branches down)
  { id: 'volleyball', label: 'Volleyball', x: 1780, direction: 'down', type: 'fork', essaySlug: 'volleyball' },

  { id: 'now', label: 'Now', x: 2000, type: 'trunk' },
];
