## Solution explanation

To search for the necessary truck elements (external or internal), type a keyword in the search bar at the top of the screen.
When you select at least one of the results presented in the table, the `Your selection` section appears at the bottom of the page. It is possible to delete any of the selected elements or all at once (note, that the `Your selection` section is hidden if there are no selected elements).

The `View combinations` button enabled only if at least one internal and external element is selected (i.e. combinations can be made). When you click on `View combinations` button, a confirmation modal appears in accordance with the task, although its business value raises questions: usually such a modal is shown if any irreversible actions are performed. In this case, there is no irreversible action: the user can return to the previous page without losing data. Therefore, modal can be abandoned in future releases.

After clicking on `View combinations` button, the user redirects to a page with possible combinations, which are shown in a table.
If combinations between the selected elements are not possible, the notification `No combinations found` appears. The search field on this page is blocked because search can only be done on the `Landing page`.

На этой странице пользователь также может удалить один или несколько выбранных элементов. После каждого такого удаления возможные комбинации обновляются, чтобы показать актуальные данные. Если пользователь удаляет последний выбранный элемент, то он возвращается на Landing page. Также, на Langing page можно вернуться, нажав на Back button. 

On this page, the user can also delete one or more selected items. After each deletion, possible combinations are updated to show relevant data. If the user deletes the last selected item, he returns to the `Landing page`. He can also get back to the `Langing page` by clicking on the `Back` button.

> The application is build using Vue.js (Vuex) and Bootstrap. It is fully mobile responsive and covered by unit tests.