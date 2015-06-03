define(function () {

  function enableNextPage() {
    $('#go-next').attr('disabled', false);
  }

  function disableNextPage() {
    $('#go-next').attr('disabled', true);
  }

  return {
    enableNextPage: enableNextPage,
    disableNextPage: disableNextPage
  }
});

