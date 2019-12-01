import { rootSaga as albumRootSaga } from '@app/components/Album';
import { rootSaga as artistRootSaga } from '@app/components/Artist';
import { rootSaga as homeRootSaga } from '@app/components/Home';

export default [...homeRootSaga, ...artistRootSaga, ...albumRootSaga];
