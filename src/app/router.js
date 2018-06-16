//import router from 'page';
import PagesPie from './pages-pie.js';

import FeedPage from './feed-page.js'
import ActivityPage from './activity-page'
import TorrentPage from './torrent-page.js'
import DMCAPage from './dmca-page.js'
import ConfigPage from './config-page.js'
import TopPage from './top-page.js'
import DownloadPage from './download-page.js'
import ChangelogPage from './changelog-page.js'
import FiltersPage from './filters-page.js'

let routers = {}
const router = (page, callback) => {
	if(!callback)
	{
		if(!page)
			routers['/'].callback()
		else
		{
			const p = page.split('/')
			const pg = routers[`${p[0]}/${p[1]}`]
			if(!pg)
				return

			p.splice(0, 2)
			const params = {}
			for(let i = 0; i < p.length; i++)
			{
				params[pg.args[i]] = p[i]
			}
			console.log(params)
			
			pg.callback({
				params
			})
		}

		return;
	}

	const p = page.split('/')
	routers[`${p[0]}/${p[1]}`] = {callback}
	routers[`${p[0]}/${p[1]}`].args = []
	for(let i = 2; i < p.length; i++)
	{
		if(p[i].startsWith(':'))
			routers[`${p[0]}/${p[1]}`].args.push(p[i].substring(1))
	}
}


window.router = router;

router('/', () => {
	//singleton
	PagesPie.instance().open(FeedPage, {replace: 'all'});
});

router('/torrent/:hash', (e) => {
	//singleton
	PagesPie.instance().open(TorrentPage, {
		replace: 'all',
		hash: e.params.hash,
	});
});

router('/DMCA', () => {
	//singleton
	PagesPie.instance().open(DMCAPage, {replace: 'all'});
});


router('/config', () => {
	//singleton
	PagesPie.instance().open(ConfigPage, {replace: 'all'});
});

router('/filters', () => {
	//singleton
	PagesPie.instance().open(FiltersPage, {replace: 'all'});
});

router('/top', () => {
	//singleton
	PagesPie.instance().open(TopPage, {replace: 'all'});
});

router('/downloads', () => {
	//singleton
	PagesPie.instance().open(DownloadPage, {replace: 'all'});
});

router('/activity', () => {
	//singleton
	PagesPie.instance().open(ActivityPage, {replace: 'all'});
});

router('/changelog', () => {
	//singleton
	PagesPie.instance().open(ChangelogPage, {replace: 'all'});
});