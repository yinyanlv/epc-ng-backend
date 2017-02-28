let initRoutesMap = (router) => {

  let accountArea = router.createArea('account');
  accountArea.mapRoute('/account/:controller?/:action?/:id?');

  let commonArea = router.createArea('common');
  commonArea.mapRoute('/', {
    controller: 'master',
    action: 'index'
  });

  commonArea.mapRoute('/:controller?/:action?/:id?');
};

module.exports = initRoutesMap;