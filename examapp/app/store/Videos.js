Ext.define('ExamApp.store.Videos', {
    extend: 'Ext.data.Store',

    requires: [
		'ExamApp.model.Video'
	],
 
	config: {
		storeId: 'videostore',
        model: 'ExamApp.model.Video',
    }
});
