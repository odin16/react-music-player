import { actions as albumActions } from '@app/components/Album';
import { actions as artistActions } from '@app/components/Artist';
import { actions as homeActions } from '@app/components/Home';

export default { ...albumActions, ...artistActions, ...homeActions };
