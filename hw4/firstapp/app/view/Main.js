Ext.define('FirstApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome!'
                },

                html: [
                    "Welcome to my FirstApp!"
                ].join("")
            },
	{
                title: 'MyPanel',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'MyPanel'
                    },
                    {
                        xtype: 'panel',
			html: 'This is my panel.'
                    }
                ]
            },
	{
                title: 'MyImage',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'MyImage'
                    },
                    {
                        xtype: 'image',
                        src: 'http://www.sencha.com/assets/images/sencha-avatar-64x64.png',
            		height: 64,
    			width: 64
                    }
                ]
            },
	{
                title: 'MyVideo',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'MyVideo'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    }
});
