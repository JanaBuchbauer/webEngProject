Ext.define('ExamApp.store.Charts', {
    extend: 'Ext.data.Store',

    requires: ['Ext.data.proxy.Rest'],
 
    config: {
        model: 'ExamApp.model.Chart',
        autoLoad: true,
		autoSync: true,

		sorters: [
			{
				property: 'playcount',
				direction: 'DESC'
			}
		],

        proxy: {
            type: 'rest',
            url: 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=755dc5d14fc319ddc8d03c51644b8b28&format=json',
	    
			reader: {
				type:'json',
				rootProperty: 'tracks.track'
            }
        }
    }
});