# Workspace Types

This package contains the types used by the workspace. It is used by the other packages to ensure that the types are consistent across the workspace. It is also used by the workspace to ensure that the types are consistent across the workspace. 

## Installation

```bash
pnpm add -D types@monorepo --filter <package-name>
```

## Usage

```typescript
import { IExample } from '@monorepo/types';

const example: IExample = {
  id: 1,
  name: 'example',
};
```
