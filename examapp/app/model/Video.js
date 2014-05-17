Ext.define('ExamApp.model.Video', {
    extend: 'Ext.data.Model',
 
    config: {
        fields: [
            {name: 'videoId', type: 'auto'}
        ],
		
		proxy: {
			type: 'rest',
			url: '', 
            
			reader: {
				type:'json',
				rootProperty: 'items[0].id'
            }
		}
    }
});