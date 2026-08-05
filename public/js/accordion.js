// Rozbalovaci accordion (nahrada za Landingi runtime).
// Respektuje konfiguracne atributy widgetu:
//   data-expand-first-element=true  -> prva polozka startuje rozbalena
//   data-one-expanded=true          -> naraz moze byt otvorena len jedna polozka
document.querySelectorAll('.widget-accordion').forEach(function (acc) {
    var items = acc.querySelectorAll('.accordion-element-container');
    if (acc.getAttribute('data-expand-first-element') === 'true' && items[0]) {
        items[0].classList.add('open');
    }
    items.forEach(function (item) {
        var heading = item.querySelector('.accordion-heading-container');
        if (!heading) return;
        heading.style.cursor = 'pointer';
        heading.addEventListener('click', function () {
            var wasOpen = item.classList.contains('open');
            if (acc.getAttribute('data-one-expanded') === 'true') {
                items.forEach(function (other) { other.classList.remove('open'); });
            }
            item.classList.toggle('open', !wasOpen);
        });
    });
});
