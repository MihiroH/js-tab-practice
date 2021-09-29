(() => {
  const activeClassName = 'is-active';
  const $tabs = document.querySelectorAll('[data-tab]');
  const $contents = document.querySelectorAll('[data-content]');

  // 初期表示で最初の要素以外は非表示
  $contents.forEach(($content, index) => {
    if (!index) {
      $tabs[index].classList.add(activeClassName);
      return;
    }
    $content.style.display = 'none';
  });

  // タブをクリック時に対象の要素を表示
  const onClick = (event) => {
    const $target = event.target;
    const tabIndex = $target.dataset.tab;
    const $content = document.querySelector(`[data-content="${tabIndex}"]`);

    // 一旦全てのコンテンツを非表示
    $contents.forEach($content => {
      $content.style.display = 'none';
    });

    // 一旦全てのタブを初期化
    $tabs.forEach($tab => {
      $tab.classList.remove(activeClassName);
    });

    // 対象の要素を表示
    $content.style.display = 'block';

    // 対象のタブをアクティブ化
    $target.classList.add(activeClassName);
  }

  $tabs.forEach($tab => {
    $tab.addEventListener('click', onClick);
  });
})();
