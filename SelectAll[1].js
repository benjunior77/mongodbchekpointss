{"payload":{"allShortcutsEnabled":false,"fileTree":{"":{"items":[{"name":".gitignore","path":".gitignore","contentType":"file"},{"name":"SelectAll.js","path":"SelectAll.js","contentType":"file"},{"name":"delete.js","path":"delete.js","contentType":"file"},{"name":"insert.js","path":"insert.js","contentType":"file"},{"name":"package-lock.json","path":"package-lock.json","contentType":"file"},{"name":"package.json","path":"package.json","contentType":"file"},{"name":"readArray.js","path":"readArray.js","contentType":"file"},{"name":"readObject.js","path":"readObject.js","contentType":"file"},{"name":"selectOne.js","path":"selectOne.js","contentType":"file"},{"name":"table.js","path":"table.js","contentType":"file"},{"name":"update.js","path":"update.js","contentType":"file"}],"totalCount":11}},"fileTreeProcessingTime":3.569779,"foldersToFetch":[],"reducedMotionEnabled":null,"repo":{"id":618453954,"defaultBranch":"master","name":"mongodb-crud","ownerLogin":"i-m-prabhat","currentUserCanPush":false,"isFork":false,"isEmpty":false,"createdAt":"2023-03-24T13:59:14.000Z","ownerAvatar":"https://avatars.githubusercontent.com/u/117756490?v=4","public":true,"private":false,"isOrgOwned":false},"symbolsExpanded":false,"treeExpanded":true,"refInfo":{"name":"master","listCacheKey":"v0:1679666385.0","canEdit":false,"refType":"branch","currentOid":"47f661a31ea89fc3fbcb992f0ec489d333734657"},"path":"SelectAll.js","currentUser":null,"blob":{"rawLines":["var mongoose = require(\"mongoose\");","const ProductSchema = new mongoose.Schema(","    { id: Number, name: String, price: String, qty: Number, brand: String },","    { versionKey: false }",");","","mongoose.connect(\"mongodb://0.0.0.0:27017/ecommerce\", {","    useNewUrlParser: true,","    useUnifiedTopology: true","});","","const ProductModel = mongoose.model(\"Model\", ProductSchema, \"products\");","//find : Array : Collection Object","//findOne : Object","","ProductModel.find({}, function (error, data)","{","","    if (error == null)","    {","        if (typeof (data) == 'object')","        {","            if (Array.isArray(data))","            {","                // console.log(\"Data is Array of Object \");","","                for (let i in data)","                {","","                    console.log(` The Product Id : ${data[i].id} `);","                    console.log(` The Product Name : ${data[i].name} `);","                    console.log(` The Product Quantity : ${data[i].qty} `);","                    console.log(`------------`);","                }","","            } else","            {","                // console.log(\"Data is Object\");","","            }","        }","    } else","    {","        console.log(\"Exception or Error Occured\");","    }","","    mongoose.disconnect();","});"],"stylingDirectives":[[{"start":0,"end":3,"cssClass":"pl-k"},{"start":4,"end":12,"cssClass":"pl-s1"},{"start":13,"end":14,"cssClass":"pl-c1"},{"start":15,"end":22,"cssClass":"pl-en"},{"start":22,"end":23,"cssClass":"pl-kos"},{"start":23,"end":33,"cssClass":"pl-s"},{"start":33,"end":34,"cssClass":"pl-kos"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":19,"cssClass":"pl-v"},{"start":20,"end":21,"cssClass":"pl-c1"},{"start":22,"end":25,"cssClass":"pl-k"},{"start":26,"end":34,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":41,"cssClass":"pl-c1"},{"start":41,"end":42,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":6,"end":8,"cssClass":"pl-c1"},{"start":10,"end":16,"cssClass":"pl-v"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":18,"end":22,"cssClass":"pl-c1"},{"start":24,"end":30,"cssClass":"pl-v"},{"start":30,"end":31,"cssClass":"pl-kos"},{"start":32,"end":37,"cssClass":"pl-c1"},{"start":39,"end":45,"cssClass":"pl-v"},{"start":45,"end":46,"cssClass":"pl-kos"},{"start":47,"end":50,"cssClass":"pl-c1"},{"start":52,"end":58,"cssClass":"pl-v"},{"start":58,"end":59,"cssClass":"pl-kos"},{"start":60,"end":65,"cssClass":"pl-c1"},{"start":67,"end":73,"cssClass":"pl-v"},{"start":74,"end":75,"cssClass":"pl-kos"},{"start":75,"end":76,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":6,"end":16,"cssClass":"pl-c1"},{"start":18,"end":23,"cssClass":"pl-c1"},{"start":24,"end":25,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"}],[],[{"start":0,"end":8,"cssClass":"pl-s1"},{"start":8,"end":9,"cssClass":"pl-kos"},{"start":9,"end":16,"cssClass":"pl-en"},{"start":16,"end":17,"cssClass":"pl-kos"},{"start":17,"end":52,"cssClass":"pl-s"},{"start":52,"end":53,"cssClass":"pl-kos"},{"start":54,"end":55,"cssClass":"pl-kos"}],[{"start":4,"end":19,"cssClass":"pl-c1"},{"start":21,"end":25,"cssClass":"pl-c1"},{"start":25,"end":26,"cssClass":"pl-kos"}],[{"start":4,"end":22,"cssClass":"pl-c1"},{"start":24,"end":28,"cssClass":"pl-c1"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":3,"cssClass":"pl-kos"}],[],[{"start":0,"end":5,"cssClass":"pl-k"},{"start":6,"end":18,"cssClass":"pl-v"},{"start":19,"end":20,"cssClass":"pl-c1"},{"start":21,"end":29,"cssClass":"pl-s1"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":35,"cssClass":"pl-en"},{"start":35,"end":36,"cssClass":"pl-kos"},{"start":36,"end":43,"cssClass":"pl-s"},{"start":43,"end":44,"cssClass":"pl-kos"},{"start":45,"end":58,"cssClass":"pl-v"},{"start":58,"end":59,"cssClass":"pl-kos"},{"start":60,"end":70,"cssClass":"pl-s"},{"start":70,"end":71,"cssClass":"pl-kos"},{"start":71,"end":72,"cssClass":"pl-kos"}],[{"start":0,"end":34,"cssClass":"pl-c"}],[{"start":0,"end":18,"cssClass":"pl-c"}],[],[{"start":0,"end":12,"cssClass":"pl-v"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":17,"cssClass":"pl-en"},{"start":17,"end":18,"cssClass":"pl-kos"},{"start":18,"end":19,"cssClass":"pl-kos"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":22,"end":30,"cssClass":"pl-k"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":37,"cssClass":"pl-s1"},{"start":37,"end":38,"cssClass":"pl-kos"},{"start":39,"end":43,"cssClass":"pl-s1"},{"start":43,"end":44,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"}],[],[{"start":4,"end":6,"cssClass":"pl-k"},{"start":7,"end":8,"cssClass":"pl-kos"},{"start":8,"end":13,"cssClass":"pl-s1"},{"start":14,"end":16,"cssClass":"pl-c1"},{"start":17,"end":21,"cssClass":"pl-c1"},{"start":21,"end":22,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":8,"end":10,"cssClass":"pl-k"},{"start":11,"end":12,"cssClass":"pl-kos"},{"start":12,"end":18,"cssClass":"pl-k"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":24,"cssClass":"pl-s1"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":26,"end":28,"cssClass":"pl-c1"},{"start":29,"end":37,"cssClass":"pl-s"},{"start":37,"end":38,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-kos"}],[{"start":12,"end":14,"cssClass":"pl-k"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":21,"cssClass":"pl-v"},{"start":21,"end":22,"cssClass":"pl-kos"},{"start":22,"end":29,"cssClass":"pl-en"},{"start":29,"end":30,"cssClass":"pl-kos"},{"start":30,"end":34,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-kos"},{"start":35,"end":36,"cssClass":"pl-kos"}],[{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":16,"end":59,"cssClass":"pl-c"}],[],[{"start":16,"end":19,"cssClass":"pl-k"},{"start":20,"end":21,"cssClass":"pl-kos"},{"start":21,"end":24,"cssClass":"pl-k"},{"start":25,"end":26,"cssClass":"pl-s1"},{"start":27,"end":29,"cssClass":"pl-k"},{"start":30,"end":34,"cssClass":"pl-s1"},{"start":34,"end":35,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-kos"}],[],[{"start":20,"end":27,"cssClass":"pl-smi"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":31,"cssClass":"pl-en"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":66,"cssClass":"pl-s"},{"start":51,"end":64,"cssClass":"pl-s1"},{"start":51,"end":53,"cssClass":"pl-kos"},{"start":53,"end":57,"cssClass":"pl-s1"},{"start":57,"end":58,"cssClass":"pl-kos"},{"start":58,"end":59,"cssClass":"pl-s1"},{"start":59,"end":60,"cssClass":"pl-kos"},{"start":60,"end":61,"cssClass":"pl-kos"},{"start":61,"end":63,"cssClass":"pl-c1"},{"start":63,"end":64,"cssClass":"pl-kos"},{"start":66,"end":67,"cssClass":"pl-kos"},{"start":67,"end":68,"cssClass":"pl-kos"}],[{"start":20,"end":27,"cssClass":"pl-smi"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":31,"cssClass":"pl-en"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":70,"cssClass":"pl-s"},{"start":53,"end":68,"cssClass":"pl-s1"},{"start":53,"end":55,"cssClass":"pl-kos"},{"start":55,"end":59,"cssClass":"pl-s1"},{"start":59,"end":60,"cssClass":"pl-kos"},{"start":60,"end":61,"cssClass":"pl-s1"},{"start":61,"end":62,"cssClass":"pl-kos"},{"start":62,"end":63,"cssClass":"pl-kos"},{"start":63,"end":67,"cssClass":"pl-c1"},{"start":67,"end":68,"cssClass":"pl-kos"},{"start":70,"end":71,"cssClass":"pl-kos"},{"start":71,"end":72,"cssClass":"pl-kos"}],[{"start":20,"end":27,"cssClass":"pl-smi"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":31,"cssClass":"pl-en"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":73,"cssClass":"pl-s"},{"start":57,"end":71,"cssClass":"pl-s1"},{"start":57,"end":59,"cssClass":"pl-kos"},{"start":59,"end":63,"cssClass":"pl-s1"},{"start":63,"end":64,"cssClass":"pl-kos"},{"start":64,"end":65,"cssClass":"pl-s1"},{"start":65,"end":66,"cssClass":"pl-kos"},{"start":66,"end":67,"cssClass":"pl-kos"},{"start":67,"end":70,"cssClass":"pl-c1"},{"start":70,"end":71,"cssClass":"pl-kos"},{"start":73,"end":74,"cssClass":"pl-kos"},{"start":74,"end":75,"cssClass":"pl-kos"}],[{"start":20,"end":27,"cssClass":"pl-smi"},{"start":27,"end":28,"cssClass":"pl-kos"},{"start":28,"end":31,"cssClass":"pl-en"},{"start":31,"end":32,"cssClass":"pl-kos"},{"start":32,"end":46,"cssClass":"pl-s"},{"start":46,"end":47,"cssClass":"pl-kos"},{"start":47,"end":48,"cssClass":"pl-kos"}],[{"start":16,"end":17,"cssClass":"pl-kos"}],[],[{"start":12,"end":13,"cssClass":"pl-kos"},{"start":14,"end":18,"cssClass":"pl-k"}],[{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":16,"end":49,"cssClass":"pl-c"}],[],[{"start":12,"end":13,"cssClass":"pl-kos"}],[{"start":8,"end":9,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"},{"start":6,"end":10,"cssClass":"pl-k"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[{"start":8,"end":15,"cssClass":"pl-smi"},{"start":15,"end":16,"cssClass":"pl-kos"},{"start":16,"end":19,"cssClass":"pl-en"},{"start":19,"end":20,"cssClass":"pl-kos"},{"start":20,"end":48,"cssClass":"pl-s"},{"start":48,"end":49,"cssClass":"pl-kos"},{"start":49,"end":50,"cssClass":"pl-kos"}],[{"start":4,"end":5,"cssClass":"pl-kos"}],[],[{"start":4,"end":12,"cssClass":"pl-s1"},{"start":12,"end":13,"cssClass":"pl-kos"},{"start":13,"end":23,"cssClass":"pl-en"},{"start":23,"end":24,"cssClass":"pl-kos"},{"start":24,"end":25,"cssClass":"pl-kos"},{"start":25,"end":26,"cssClass":"pl-kos"}],[{"start":0,"end":1,"cssClass":"pl-kos"},{"start":1,"end":2,"cssClass":"pl-kos"},{"start":2,"end":3,"cssClass":"pl-kos"}]],"csv":null,"csvError":null,"dependabotInfo":{"showConfigurationBanner":false,"configFilePath":null,"networkDependabotPath":"/i-m-prabhat/mongodb-crud/network/updates","dismissConfigurationNoticePath":"/settings/dismiss-notice/dependabot_configuration_notice","configurationNoticeDismissed":null,"repoAlertsPath":"/i-m-prabhat/mongodb-crud/security/dependabot","repoSecurityAndAnalysisPath":"/i-m-prabhat/mongodb-crud/settings/security_analysis","repoOwnerIsOrg":false,"currentUserCanAdminRepo":false},"displayName":"SelectAll.js","displayUrl":"https://github.com/i-m-prabhat/mongodb-crud/blob/master/SelectAll.js?raw=true","headerInfo":{"blobSize":"1.19 KB","deleteInfo":{"deleteTooltip":"You must be signed in to make or propose changes"},"editInfo":{"editTooltip":"You must be signed in to make or propose changes"},"ghDesktopPath":"https://desktop.github.com","gitLfsPath":null,"onBranch":true,"shortPath":"77890a7","siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2Fi-m-prabhat%2Fmongodb-crud%2Fblob%2Fmaster%2FSelectAll.js","isCSV":false,"isRichtext":false,"toc":null,"lineInfo":{"truncatedLoc":"48","truncatedSloc":"39"},"mode":"file"},"image":false,"isCodeownersFile":null,"isPlain":false,"isValidLegacyIssueTemplate":false,"issueTemplateHelpUrl":"https://docs.github.com/articles/about-issue-and-pull-request-templates","issueTemplate":null,"discussionTemplate":null,"language":"JavaScript","languageID":183,"large":false,"loggedIn":false,"newDiscussionPath":"/i-m-prabhat/mongodb-crud/discussions/new","newIssuePath":"/i-m-prabhat/mongodb-crud/issues/new","planSupportInfo":{"repoIsFork":null,"repoOwnedByCurrentUser":null,"requestFullPath":"/i-m-prabhat/mongodb-crud/blob/master/SelectAll.js","showFreeOrgGatedFeatureMessage":null,"showPlanSupportBanner":null,"upgradeDataAttributes":null,"upgradePath":null},"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_dockerfile","dismissStackNoticePath":"/settings/dismiss-notice/publish_stack_from_file","releasePath":"/i-m-prabhat/mongodb-crud/releases/new?marketplace=true","showPublishActionBanner":false,"showPublishStackBanner":false},"rawBlobUrl":"https://github.com/i-m-prabhat/mongodb-crud/raw/master/SelectAll.js","renderImageOrRaw":false,"richText":null,"renderedFileInfo":null,"shortPath":null,"tabSize":8,"topBannersInfo":{"overridingGlobalFundingFile":false,"globalPreferredFundingPath":null,"repoOwner":"i-m-prabhat","repoName":"mongodb-crud","showInvalidCitationWarning":false,"citationHelpUrl":"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files","showDependabotConfigurationBanner":false,"actionsOnboardingTip":null},"truncated":false,"viewable":true,"workflowRedirectUrl":null,"symbols":{"timedOut":false,"notAnalyzed":false,"symbols":[]}},"copilotInfo":null,"copilotAccessAllowed":false,"csrf_tokens":{"/i-m-prabhat/mongodb-crud/branches":{"post":"DBr2TpovrkUMbbIBXK-LPGo7u03fA_AXolZP0kcFnvLhzuZ3637cRWEAfebgYnnYB6KJk_UKt9pPtVLWpaZi9w"},"/repos/preferences":{"post":"oXwOoz6AgAfeWlZbT7pVVBv9xjqk11e1Zjniln1jHSegUGlRmPP0yajA_3NHmvADuKx63oKcm-wPK9T0ACMS1A"}}},"title":"mongodb-crud/SelectAll.js at master · i-m-prabhat/mongodb-crud"}