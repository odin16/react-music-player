import homeRootSaga from '@app/views/home/redux/sagas';
import artistRootSaga from '@app/views/artist/redux/sagas';
import albumRootSaga from '@app/views/album/redux/sagas';

export default [...homeRootSaga, ...artistRootSaga, ...albumRootSaga];
