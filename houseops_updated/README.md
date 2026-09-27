# HouseOps — Housekeeping Management Demo

Готовый frontend-demo на **HTML / CSS / JavaScript** без build step.

## Запуск

Откройте `index.html` в Chrome или Edge. Сервер и установка пакетов не нужны.

## Роли

### Admin — только аналитика

Admin не управляет задачами и распределением. Он видит:

- недельные легкие bar-chart диаграммы;
- сколько номеров убрано по дням;
- среднее время уборки;
- check-in / check-out сотрудников;
- общее рабочее время;
- среднее время в номере;
- качество и количество Re-clean.

### Supervisor

Supervisor получает операционные функции:

- **Task Maker**;
- массовое создание номеров (например, 7 этажей × 10 номеров);
- добавление/удаление горничных;
- demo AI floor-first optimizer;
- ручное изменение любого назначения через dropdown;
- публикация распределения в задачи горничных;
- отдельная кнопка **+ Создать задачу** для пропущенного номера уже после основной публикации;
- удаление ошибочной задачи — она сразу исчезает и из мобильного списка горничной;
- Quality Review с фотографиями **до / после**;
- действия **Approve / Re-clean**;
- просмотр проблем и прикрепленных фотографий.

### Housekeeper

Mobile-first интерфейс:

- список назначенных номеров;
- таймер уборки;
- checklist;
- отдельные поля **фото ДО** и **фото ПОСЛЕ**;
- реальное preview загруженной фотографии через `FileReader`;
- возможность удалить неверно выбранное фото;
- фото к проблеме/maintenance issue;
- отправка номера на проверку супервайзеру;
- Re-clean возвращается с причиной;
- **VoiceReader** на карточке и внутри задачи + отдельная кнопка **Stop**;
- 6 обучающих модулей с локальными MP4-видео, практическими примерами и мини-тестами.

## Фото и Quality Control

Фотографии сохраняются в памяти текущей вкладки как data URL. Поэтому выбранная фотография сразу видна:

1. горничной в задаче;
2. в созданном issue;
3. супервайзеру в Quality Review / Issue Center.

Данные не сохраняются после перезагрузки страницы — это frontend demo. В production фотографии нужно отправлять в backend/object storage (Azure Blob, S3 и т. п.).

## AI проверка фотографии

В Quality Review показан **Demo AI photo check** (`Likely clean / Needs attention`). Сейчас это намеренно локальная эвристика для демонстрации UX, а не настоящий computer vision анализ изображения.

Для production можно заменить `runDemoAiQuality(task)` на вызов C# backend, который отправит изображения в Vision API / собственную ML-модель и вернет score + замечания.

## Smart Dispatch

`optimizeMaker()`:

- группирует работу по этажам;
- старается не заставлять горничную переходить между этажами без необходимости;
- распределяет комнаты внутри назначенного этажа по текущей нагрузке;
- после оптимизации все назначения остаются редактируемыми;
- `Publish assignments` создает реальные task cards для mobile flow.

## Production backend recommendation

- C# / ASP.NET Core Web API
- Entity Framework Core
- SQL Server / PostgreSQL
- JWT + RBAC
- SignalR для live update
- Azure Blob / S3 compatible storage для фото
- OR-Tools / optimization service для dispatch
- Vision API / ML service для фото-проверки


## Quick Create / Delete task

После публикации основного AI-плана супервайзер может нажать верхнюю кнопку `+ Создать задачу`, указать номер, этаж, тип уборки, горничную, приоритет, дедлайн и норматив времени. Такая задача добавляется сразу, без повторной публикации всего плана.

В `Supervisor → Tasks` у каждой задачи есть `Удалить задачу`. Удаление происходит из единого массива задач, поэтому запись одновременно исчезает из списка супервайзера и из мобильного списка назначенной горничной.

## VoiceReader и Training video

VoiceReader использует Web Speech API (`speechSynthesis`) с текущей локалью `en-US`, `ru-RU` или `ka-GE`. Кнопка `Stop` вызывает `speechSynthesis.cancel()` и немедленно прекращает чтение. Наличие конкретного системного голоса зависит от браузера/ОС.

Локальные учебные ролики находятся в `assets/training/` и работают без внешнего видеохостинга.


## v3 — Hotel inventory + Issues flow

- В Task Maker добавлена отдельная кнопка **«Добавить все номера гостиницы»**. Она берет значения «Этажей» и «Номеров на этаже» и одним нажатием добавляет все отсутствующие комнаты, не удаляя уже вручную добавленные номера.
- Пример: `7 этажей × 10 номеров` → полный список из 70 комнат. Если часть комнат уже есть, добавляются только недостающие.
- Проблема, которую горничная отправляет из задачи (например, разбитый стакан), создается как отдельный объект Issue и сразу появляется в Supervisor → **Проблемы**.
- В Issue сохраняются номер комнаты, этаж, горничная, время, описание и копия приложенных фотографий. После отправки локальные фото проблемы очищаются из формы, чтобы следующая проблема не получила старые снимки.
- В боковом меню Supervisor у вкладки «Проблемы» показывается количество открытых проблем.


## v4 — Housekeeper issue receipt
- A housekeeper can submit an issue with a photo only; description is optional.
- Submitted issue photos are copied into the housekeeper Issues tab and remain visible there during the demo session.
- The newest submitted issue is highlighted with a sent confirmation receipt.
- The mobile Issues tab shows the current count, making it easy to verify that a photo/report was actually sent.
- Issues are attributed to the logged-in/demo housekeeper rather than inferred from the task assignee.


## v5 — Photo modal close fix
- Fixed the × close button in Supervisor Issues and Quality Review photo previews.
- Photo/dialog modals now also close with Escape.
- Clicking the dimmed backdrop outside a modal closes it.
- Modal close handlers are attached centrally whenever a modal opens, preventing stale handler bugs in dynamically opened photo previews.


## v6 — Unsent issue reminder, cross-tab sync, and a saner AI quality score

**"Not sent yet" reminder in the housekeeper Issues tab**
- Attaching a photo to "Report an issue" inside a task no longer only lives inside that task. It now also shows up at the top of the mobile **Issues** tab, in a "Not sent yet" section, as a reminder.
- Tapping "Open task & send" jumps back into the task so the housekeeper can add a description and actually send it.
- Once sent, it moves out of "Not sent yet" and into the normal list with the "Sent successfully" receipt, and appears in Supervisor → Issues.
- The bottom-nav Issues badge now counts both unsent drafts and sent issues, so a forgotten photo is never invisible.

**Housekeeper and Supervisor now actually share data (same browser)**
- This is still a frontend-only demo with no backend, but the housekeeper and supervisor views are normally opened as two different browser tabs (or the tab is refreshed) during a demo. Previously each tab/reload kept its own private in-memory copy of tasks/issues, so anything submitted on one side — like a broken-glass photo — silently never appeared on the other.
- Tasks, issues, and room/cleaner setup are now mirrored to the browser's `localStorage` and re-read whenever they change, including live updates pushed from other open tabs of the same browser (via the `storage` event). A photo sent by the housekeeper now shows up for the supervisor without needing to be in the exact same tab, and survives a page reload.
- Real cross-device sync (different computers/phones) still needs a real backend — see "Production backend recommendation" below — but this fixes the common same-browser, multi-tab demo case.

**AI quality check no longer contradicts the evidence**
- The old "Demo AI photo check" score was mostly a fixed number derived from the task's ID, so it didn't move with anything the housekeeper actually submitted, and could show "Likely clean 96%" on a room that had an open maintenance issue attached to it (e.g. Room 212's slow drain).
- It's still a disclosed demo heuristic, not real computer vision — but it now reacts to the actual submitted evidence: checklist completion, before/after photo coverage, an issue photo still attached but not yet sent, and any open issue linked to that same room.
- A room with an open linked issue is now shown as its own "Open issue on this room" state (amber/red) instead of being scored as clean, and the score/verdict recompute every time the review list renders instead of being cached from the moment of submission.

**Clarified: attaching a photo ≠ sending the issue**
- Taking/attaching a photo under "Report an issue" only saves it as a draft on that task — it is intentionally *not* sent to the supervisor yet, so the housekeeper still needs to open the task and press "Send issue" once she's ready (optionally after adding a description).
- To make that last step harder to miss, tapping "Open task & send" from a "Not sent yet" card now scrolls straight to the issue form and briefly highlights it, and the "Send issue" button is now a solid primary button instead of a subtle outline one.

## v7 — Safe Publish + Room Status + Flexible Checklists

### Safe Publish assignments

`Publish assignments` больше не удаляет и не пересоздаёт все задачи Task Maker.

Перед публикацией Supervisor видит preview изменений:

- **New tasks** — новые задачи;
- **Reassigned** — изменён исполнитель / тип уборки у ещё не начатой задачи;
- **Unchanged** — задачи без изменений;
- **Removed** — только ещё не начатые задачи, которых больше нет в текущем плане.

Если задача уже начата (`In Progress`, `Review`, `Re-clean`, `Completed`), она защищена: сохраняются `id`, таймер, фото, checklist, статус и текущий исполнитель. Повторный Publish не сбрасывает прогресс.

### Hotel Inventory / Room Status

Supervisor получил отдельный раздел **Hotel Inventory**. Для каждого номера можно менять:

- `Occupied`
- `Checkout expected`
- `Dirty`
- `Cleaning`
- `Inspection`
- `Clean / Ready`
- `DND`
- `Out of Order`

Task Maker автоматически планирует номера со статусами **Checkout expected** и **Dirty**. Статус номера также меняется по workflow задачи: начало уборки → `Cleaning`, отправка на QC → `Inspection`, Approve → `Clean / Ready` (для Stayover возвращается `Occupied`), Re-clean → `Dirty`.

Room inventory и task теперь разделены: удаление ошибочной задачи больше **не удаляет сам номер** из Hotel Inventory.

### Flexible Checklists

Добавлен Supervisor → **Checklist Templates** с отдельными шаблонами для:

- Checkout cleaning
- Stayover cleaning
- Deep cleaning
- Daily room cleaning

В шаблоне можно:

- добавлять пункты;
- удалять пункты;
- менять текст;
- отмечать пункт как обязательный / необязательный.

Каждая новая задача получает snapshot выбранного шаблона. Через `Tasks → Details → Edit checklist` Supervisor может изменить checklist только для конкретной задачи, не меняя остальные.

В mobile task горничная видит динамический checklist и может добавить собственный необязательный пункт через **«+ Добавить своё дело»**. Пользовательский пункт можно удалить прямо из задачи.

### Preview

В папке `preview/` лежат реальные screenshots обновлённой версии:

- `hotel-inventory.png`
- `safe-publish.png`
- `checklist-templates.png`
- `mobile-flexible-checklist.png`

### Проверка

Версия проверена в headless Chromium: Supervisor navigation, Hotel Inventory, optimizer, Safe Publish modal, checklist template editor и mobile checklist открываются без JavaScript console/page errors.

> В текущей загрузке не было папки `assets/training/` с MP4-файлами. Если она есть в вашей предыдущей версии проекта, просто скопируйте её рядом с `index.html`, чтобы локальные Training videos продолжили работать.


## v7.3 — Reset Task Maker room list
- Added **Remove all rooms / Удалить все номера** in Task Maker.
- The action requires confirmation.
- It clears the room inventory shown in Task Maker and the current draft assignment state only.
- Already published or started housekeeper tasks are preserved.
