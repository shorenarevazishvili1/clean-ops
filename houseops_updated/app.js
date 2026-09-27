const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const I18N = {
  en: {
    operationsControl: 'Operations Control', systemName: 'HOUSEKEEPING MANAGEMENT SYSTEM',
    heroTitle: 'One operational workspace for rooms, people, time and quality.',
    heroText: 'Demo platform for room assignments, cleaning proof, time tracking and supervisor quality control.',
    firstPass: 'First-pass quality', avgClean: 'Avg. clean time', liveAlerts: 'Live alerts',
    demoAccess: 'DEMO ACCESS', chooseWorkspace: 'Choose your workspace',
    credentialsNote: 'Credentials are not validated in the demo. Select a role to open the corresponding flow.',
    email: 'Email', password: 'Password', admin: 'Admin', supervisor: 'Supervisor', housekeeper: 'Housekeeper',
    adminDesc: 'Analytics only', supervisorDesc: 'Dispatch & QC', housekeeperDesc: 'Mobile task flow',
    openDemo: 'Open demo workspace', previewHousekeeper: 'Preview Housekeeper', logout: 'Logout',
    adminConsole: 'Admin Analytics', supervisorConsole: 'Supervisor Console', administrator: 'Administrator',
    dashboard: 'Dashboard', time: 'Time tracking', employees: 'Housekeeper analytics', overview: 'Shift overview',
    taskMaker: 'Task Maker', reviews: 'Quality review', issues: 'Issues', training: 'Training', tasks: 'Tasks', shift: 'Shift', learn: 'Learn',
    hello: 'Hi, Nino 👋', morningShift: 'Morning shift · 08:00–16:00',
    weeklyPerformance: 'Weekly performance', weeklyPerformanceText: 'Simple visibility into attendance, room throughput and cleaning time.',
    checkedIn: 'Checked in', avgRoomTime: 'Avg. room time', roomsDone: 'Rooms completed', quality: 'Quality',
    roomsPerDay: 'Rooms completed by day', avgMinutesByDay: 'Average cleaning minutes', employeeWeek: 'Housekeeper weekly summary',
    employee: 'Employee', checkIn: 'Check-in', checkOut: 'Check-out', worked: 'Worked', roomTime: 'Room time', recleans: 'Re-cleans',
    supervisorOverview: 'Supervisor control center', supervisorOverviewText: 'Build today’s room plan, review photo proof and manage exceptions.',
    pendingReview: 'Pending review', reclean: 'Re-clean', unassigned: 'Unassigned', publishedTasks: 'Published tasks',
    buildPlan: 'Build today’s room plan', buildPlanText: '1) Add all rooms. 2) Add all housekeepers. 3) Run floor-first AI optimization. 4) Edit any assignment. 5) Publish.',
    buildingSetup: 'Room inventory', floors: 'Floors', roomsPerFloor: 'Rooms per floor', generateRooms: 'Generate rooms', addAllHotelRooms: 'Add all hotel rooms', clearAllRooms: 'Remove all rooms', clearAllRoomsTitle: 'Remove all rooms from Task Maker?', clearAllRoomsText: 'This clears the room list and current draft assignments. Already published or started housekeeper tasks will stay unchanged.', allRoomsAdded: 'hotel rooms added', hotelInventoryComplete: 'All hotel rooms are already in the list.', addRoom: 'Add room', roomList: 'Rooms', roomsCleared: 'All rooms were removed from Task Maker.',
    housekeepingTeam: 'Housekeeping team', cleanerName: 'Housekeeper name', homeFloor: 'Preferred floor', addCleaner: 'Add housekeeper', activeCleaners: 'Active housekeepers',
    optimize: 'AI optimize by floor', publish: 'Publish assignments', assignmentPlan: 'Assignment plan',
    optimizationNote: 'The demo optimizer keeps each housekeeper on one floor whenever capacity allows, then balances the room count. Every row stays editable.',
    floor: 'Floor', room: 'Room', assigned: 'Assigned', priority: 'Priority', status: 'Status', action: 'Action', remove: 'Remove',
    manualOverride: 'Manual override', optimized: 'Optimized', draft: 'Draft', planPublished: 'Assignments published to housekeeper tasks.',
    roomsGenerated: 'Room inventory generated.', cleanerAdded: 'Housekeeper added.', optimizeDone: 'Floor-first plan optimized. You can still edit every assignment.',
    reviewQueue: 'Photo quality review', reviewQueueText: 'Compare before/after proof, see demo AI signal, then approve or return for Re-clean.',
    noReviews: 'No rooms are waiting for review.', beforePhoto: 'Before cleaning', afterPhoto: 'After cleaning', aiPhotoCheck: 'AI photo check',
    aiDemo: 'Demo heuristic — replace with a vision API in production.', likelyClean: 'Likely clean', needsAttention: 'Needs attention', flaggedIssue: 'Open issue on this room', noPhoto: 'No photo',
    approveRoom: 'Approve', returnReclean: 'Re-clean', reason: 'Reason', sendReclean: 'Send Re-clean', cancel: 'Cancel',
    issueCenter: 'Issue center', issueCenterText: 'Photo-backed issues submitted by housekeepers.', noIssues: 'No reported issues.',
    issueType: 'Issue type', description: 'Description', reportedBy: 'Reported by', reportedAt: 'Reported at', issuePhoto: 'Issue photo',
    myTasks: 'My Tasks', remaining: 'remaining', todayProgress: 'Today’s progress', startTask: 'Start task', openTask: 'Open task',
    deadline: 'Deadline', expected: 'Expected', cleaningTime: 'Cleaning time', pause: 'Pause', resume: 'Resume', checklist: 'Checklist',
    photoProof: 'Room photo proof', beforeHint: 'Take/upload a photo before cleaning.', afterHint: 'Take/upload a photo after cleaning. At least one after photo is required to submit.',
    takeBefore: 'Take / add BEFORE photo', takeAfter: 'Take / add AFTER photo', reportIssue: 'Report an issue', describeIssue: 'Describe the issue…',
    addIssuePhoto: 'Take / add issue photo', sendIssue: 'Send issue', submitReview: 'Submit for review',
    completeChecklist: 'Complete the checklist first.', afterRequired: 'Add at least one AFTER photo before submitting.', photoAttached: 'Photo attached.',
    issueSent: 'Issue sent to the supervisor and added to Issues.', issueNeedContent:'Add a photo or description before sending.', issueNoDescription:'Photo report (no description)', issueReceipt:'Sent successfully', issueReceiptText:'This is the exact photo and report saved in Issues.', submitted: 'submitted for supervisor review.',
    draftIssues: 'Not sent yet', draftIssueHint: 'Saved on this task, not sent to the supervisor yet. Open the task to add a description and send it.', continueIssue: 'Open task & send',
    back: 'Back', details: 'Details', close: 'Close', allTasks: 'All operational tasks', allTasksText: 'Published room tasks and current statuses.', noTasks: 'No tasks yet.',
    trainingTitle: 'Training', trainingText: 'Video lessons, practical examples and mini tests.',
    onboardingProgress: 'Onboarding progress', modulesPassed: 'modules passed', videosTests: 'Videos + mini tests', passed: 'Passed', toDo: 'To do',
    reviewLesson: 'Review lesson', startLesson: 'Start lesson', trainingModule: 'TRAINING MODULE', practicalExamples: 'PRACTICAL EXAMPLES', goodExample: 'Good example', badExample: 'Avoid',
    quickCheck: 'QUICK CHECK', quizTitle: '2-question quiz', submitTest: 'Submit test', passMark: 'Pass mark: 50%. You can retry immediately.', testPassed: 'Test passed', tryAgain: 'Try again',
    readAloud: 'Read task aloud', stopVoice: 'Stop', voiceReading: 'VoiceReader is reading the task…', voiceStopped: 'VoiceReader stopped.', voiceUnsupported: 'VoiceReader is not supported in this browser.',
    quickCreateTask: '+ Create task', createTaskTitle: 'Add one room task', taskType: 'Task type', assignTo: 'Assign to', expectedMinutes: 'Expected minutes', create: 'Create task',
    taskCreated: 'Task added and sent to the selected housekeeper.', deleteTask: 'Delete task', deleteTaskTitle: 'Delete this task?', deleteTaskText: 'The task will also disappear from the housekeeper’s task list.', deleteIssue: 'Delete card', deleteIssueTitle: 'Delete this issue card?', deleteIssueText: 'The issue will be removed from the supervisor issue center.', confirmDelete: 'Delete', taskDeleted: 'Task deleted.', issueDeleted: 'Issue card deleted.',
    checkoutCleaning: 'Checkout cleaning', stayoverCleaning: 'Stayover cleaning', deepCleaning: 'Deep cleaning', dailyCleaning: 'Daily room cleaning',
    shiftStatus: 'Shift status', tasksCompleted: 'Tasks completed', trackedCleaning: 'Tracked cleaning', qualityScore: 'Quality score',
    photoPreview: 'Photo preview', deletePhoto: 'Remove photo', approved: 'Room approved.', recleanSent: 'Room returned for Re-clean.',
    reasonRequired: 'Please enter a Re-clean reason.', nameRequired: 'Enter a housekeeper name.',
    maintenance: 'Maintenance', brokenItem: 'Broken item', missingItem: 'Missing item', other: 'Other',
    urgent: 'Urgent', high: 'High', medium: 'Medium', low: 'Low', pending: 'Pending', inProgress: 'In Progress', review: 'Review', completed: 'Completed',
    hotelInventory: 'Hotel Inventory', inventoryText: 'Manage room status and decide what actually needs cleaning today.', roomStatus: 'Room status', cleaningType: 'Cleaning type', needsTask: 'Needs task', noTask: 'No task',
    occupied: 'Occupied', checkoutExpected: 'Checkout expected', dirty: 'Dirty', cleaning: 'Cleaning', inspection: 'Inspection', cleanReady: 'Clean / Ready', dnd: 'DND', outOfOrder: 'Out of Order',
    checklistTemplates: 'Checklist Templates', checklistTemplatesText: 'Create flexible checklists for each cleaning type and customize any individual task.', editTemplate: 'Edit template', items: 'items', addItem: 'Add item', saveTemplate: 'Save template', requiredItem: 'Required', optionalItem: 'Optional', editChecklist: 'Edit checklist', addCustomTask: 'Add custom task', checklistUpdated: 'Checklist updated.', templateSaved: 'Checklist template saved.', customTask: 'Custom task',
    publishPreviewTitle: 'Review assignment update', publishPreviewText: 'Today’s plan will be updated without resetting tasks that already started.', safePublishNote: 'Started tasks keep their timer, photos, checklist and current status.', newTasks: 'New tasks', reassigned: 'Reassigned', unchanged: 'Unchanged', removedTasks: 'Removed', confirmPublish: 'Publish update', protectedTasks: 'active tasks protected', noPlanChanges: 'No plan changes to publish.', taskLocked: 'Started task — current assignee is protected.',
    aiAssistant: 'AI Operations Assistant'
  },
  ru: {
    operationsControl: 'Управление операциями', systemName: 'СИСТЕМА УПРАВЛЕНИЯ HOUSEKEEPING',
    heroTitle: 'Единое рабочее пространство для номеров, персонала, времени и качества.',
    heroText: 'Демо-платформа для распределения номеров, фото-контроля, учета времени и проверки супервайзером.',
    firstPass: 'Качество с первого раза', avgClean: 'Среднее время уборки', liveAlerts: 'Активные алерты',
    demoAccess: 'ДЕМО ДОСТУП', chooseWorkspace: 'Выберите рабочее пространство',
    credentialsNote: 'В демо учетные данные не проверяются. Выберите роль.',
    email: 'Email', password: 'Пароль', admin: 'Администратор', supervisor: 'Супервайзер', housekeeper: 'Горничная',
    adminDesc: 'Только аналитика', supervisorDesc: 'Распределение и QC', housekeeperDesc: 'Мобильный рабочий процесс',
    openDemo: 'Открыть демо', previewHousekeeper: 'Предпросмотр горничной', logout: 'Выйти',
    adminConsole: 'Аналитика администратора', supervisorConsole: 'Консоль супервайзера', administrator: 'Администратор',
    dashboard: 'Дашборд', time: 'Учет времени', employees: 'Аналитика горничных', overview: 'Обзор смены',
    taskMaker: 'Task Maker', reviews: 'Контроль качества', issues: 'Проблемы', training: 'Обучение', tasks: 'Задачи', shift: 'Смена', learn: 'Обучение',
    hello: 'Привет, Нино 👋', morningShift: 'Утренняя смена · 08:00–16:00',
    weeklyPerformance: 'Работа за неделю', weeklyPerformanceText: 'Простая статистика посещаемости, количества номеров и времени уборки.',
    checkedIn: 'На смене', avgRoomTime: 'Среднее время номера', roomsDone: 'Убрано номеров', quality: 'Качество',
    roomsPerDay: 'Убрано номеров по дням', avgMinutesByDay: 'Среднее время уборки', employeeWeek: 'Недельная статистика горничных',
    employee: 'Сотрудник', checkIn: 'Вход', checkOut: 'Выход', worked: 'На смене', roomTime: 'Время в номерах', recleans: 'Re-clean',
    supervisorOverview: 'Центр управления супервайзера', supervisorOverviewText: 'Соберите план номеров, проверьте фото и обработайте исключения.',
    pendingReview: 'Ждут проверки', reclean: 'Re-clean', unassigned: 'Без назначения', publishedTasks: 'Опубликованные задачи',
    buildPlan: 'План уборки на сегодня', buildPlanText: '1) Добавьте все номера. 2) Добавьте всех горничных. 3) Запустите AI по этажам. 4) При необходимости измените назначения. 5) Опубликуйте.',
    buildingSetup: 'Список номеров', floors: 'Этажей', roomsPerFloor: 'Номеров на этаже', generateRooms: 'Создать номера', addAllHotelRooms: 'Добавить все номера гостиницы', clearAllRooms: 'Удалить все номера', clearAllRoomsTitle: 'Удалить все номера из Task Maker?', clearAllRoomsText: 'Будут очищены список номеров и текущий черновик распределения. Уже опубликованные или начатые задачи горничных останутся без изменений.', allRoomsAdded: 'номеров гостиницы добавлено', hotelInventoryComplete: 'Все номера гостиницы уже добавлены в список.', addRoom: 'Добавить номер', roomList: 'Номера', roomsCleared: 'Все номера удалены из Task Maker.',
    housekeepingTeam: 'Команда горничных', cleanerName: 'Имя горничной', homeFloor: 'Предпочтительный этаж', addCleaner: 'Добавить горничную', activeCleaners: 'Горничных',
    optimize: 'AI распределить по этажам', publish: 'Опубликовать назначения', assignmentPlan: 'План распределения',
    optimizationNote: 'Демо-оптимизатор старается держать горничную на одном этаже и равномерно делит номера. Любое назначение можно изменить вручную.',
    floor: 'Этаж', room: 'Номер', assigned: 'Назначено', priority: 'Приоритет', status: 'Статус', action: 'Действие', remove: 'Удалить',
    manualOverride: 'Изменено вручную', optimized: 'Оптимизировано', draft: 'Черновик', planPublished: 'Назначения опубликованы в задачах горничных.',
    roomsGenerated: 'Список номеров создан.', cleanerAdded: 'Горничная добавлена.', optimizeDone: 'Распределение по этажам оптимизировано. Любое назначение можно изменить.',
    reviewQueue: 'Проверка качества по фото', reviewQueueText: 'Сравните фото до/после, посмотрите demo AI-сигнал и выберите Approve или Re-clean.',
    noReviews: 'Сейчас нет номеров на проверке.', beforePhoto: 'До уборки', afterPhoto: 'После уборки', aiPhotoCheck: 'AI проверка фото',
    aiDemo: 'Демо-эвристика — в production подключается Vision API.', likelyClean: 'Вероятно убрано', needsAttention: 'Нужна проверка', flaggedIssue: 'По номеру есть открытая проблема', noPhoto: 'Нет фото',
    approveRoom: 'Approve', returnReclean: 'Re-clean', reason: 'Причина', sendReclean: 'Отправить Re-clean', cancel: 'Отмена',
    issueCenter: 'Центр проблем', issueCenterText: 'Проблемы с фото, отправленные горничными.', noIssues: 'Нет зарегистрированных проблем.',
    issueType: 'Тип проблемы', description: 'Описание', reportedBy: 'Кто сообщил', reportedAt: 'Время', issuePhoto: 'Фото проблемы',
    myTasks: 'Мои задачи', remaining: 'осталось', todayProgress: 'Прогресс сегодня', startTask: 'Начать', openTask: 'Открыть задачу',
    deadline: 'Дедлайн', expected: 'Норма', cleaningTime: 'Время уборки', pause: 'Пауза', resume: 'Продолжить', checklist: 'Чек-лист',
    photoProof: 'Фото номера', beforeHint: 'Снимите/добавьте фото до уборки.', afterHint: 'Снимите/добавьте фото после уборки. Для отправки нужно минимум одно фото «после».',
    takeBefore: 'Снять / добавить фото ДО', takeAfter: 'Снять / добавить фото ПОСЛЕ', reportIssue: 'Сообщить о проблеме', describeIssue: 'Опишите проблему…',
    addIssuePhoto: 'Снять / добавить фото проблемы', sendIssue: 'Отправить проблему', submitReview: 'Отправить на проверку',
    completeChecklist: 'Сначала завершите чек-лист.', afterRequired: 'Добавьте минимум одно фото ПОСЛЕ уборки.', photoAttached: 'Фото добавлено.',
    issueSent: 'Проблема отправлена супервайзеру и добавлена в «Проблемы».', issueNeedContent:'Добавьте фото или описание перед отправкой.', issueNoDescription:'Фото-отчёт без описания', issueReceipt:'Отправлено успешно', issueReceiptText:'Именно это фото и сообщение сохранены во вкладке «Проблемы».', submitted: 'отправлен на проверку супервайзеру.',
    draftIssues: 'Ещё не отправлено', draftIssueHint: 'Сохранено в этой задаче, но пока не отправлено супервайзеру. Откройте задачу, добавьте описание и отправьте.', continueIssue: 'Открыть задачу и отправить',
    back: 'Назад', details: 'Детали', close: 'Закрыть', allTasks: 'Все рабочие задачи', allTasksText: 'Опубликованные номера и текущие статусы.', noTasks: 'Задач пока нет.',
    trainingTitle: 'Обучение', trainingText: 'Видео-уроки, практические примеры и мини-тесты.',
    onboardingProgress: 'Прогресс обучения', modulesPassed: 'модулей пройдено', videosTests: 'Видео + мини-тесты', passed: 'Пройдено', toDo: 'Пройти',
    reviewLesson: 'Повторить урок', startLesson: 'Начать урок', trainingModule: 'УЧЕБНЫЙ МОДУЛЬ', practicalExamples: 'ПРАКТИЧЕСКИЕ ПРИМЕРЫ', goodExample: 'Хороший пример', badExample: 'Не делайте так',
    quickCheck: 'БЫСТРАЯ ПРОВЕРКА', quizTitle: 'Тест из 2 вопросов', submitTest: 'Отправить тест', passMark: 'Проходной балл: 50%. Можно пересдать сразу.', testPassed: 'Тест пройден', tryAgain: 'Попробуйте еще раз',
    readAloud: 'Прочитать задачу', stopVoice: 'Стоп', voiceReading: 'VoiceReader читает задачу…', voiceStopped: 'VoiceReader остановлен.', voiceUnsupported: 'VoiceReader не поддерживается этим браузером.',
    quickCreateTask: '+ Создать задачу', createTaskTitle: 'Добавить отдельный номер', taskType: 'Тип уборки', assignTo: 'Назначить', expectedMinutes: 'Ожидаемые минуты', create: 'Создать задачу',
    taskCreated: 'Задача добавлена и сразу отправлена выбранной горничной.', deleteTask: 'Удалить задачу', deleteTaskTitle: 'Удалить эту задачу?', deleteTaskText: 'Она также исчезнет из списка задач горничной.', deleteIssue: 'Удалить карточку', deleteIssueTitle: 'Удалить эту карточку проблемы?', deleteIssueText: 'Карточка исчезнет из центра проблем супервайзера.', confirmDelete: 'Удалить', taskDeleted: 'Задача удалена.', issueDeleted: 'Карточка проблемы удалена.',
    checkoutCleaning: 'Уборка после выезда', stayoverCleaning: 'Уборка проживающего гостя', deepCleaning: 'Глубокая уборка', dailyCleaning: 'Ежедневная уборка номера',
    shiftStatus: 'Статус смены', tasksCompleted: 'Задач завершено', trackedCleaning: 'Учтено уборки', qualityScore: 'Оценка качества',
    photoPreview: 'Просмотр фото', deletePhoto: 'Удалить фото', approved: 'Номер одобрен.', recleanSent: 'Номер отправлен на Re-clean.',
    reasonRequired: 'Укажите причину Re-clean.', nameRequired: 'Введите имя горничной.',
    maintenance: 'Техобслуживание', brokenItem: 'Сломанный предмет', missingItem: 'Отсутствует предмет', other: 'Другое',
    urgent: 'Срочно', high: 'Высокий', medium: 'Средний', low: 'Низкий', pending: 'Ожидание', inProgress: 'В процессе', review: 'Проверка', completed: 'Завершено',
    hotelInventory: 'Номера гостиницы', inventoryText: 'Управляйте статусами номеров и определяйте, что действительно нужно убрать сегодня.', roomStatus: 'Статус номера', cleaningType: 'Тип уборки', needsTask: 'Нужна задача', noTask: 'Без задачи',
    occupied: 'Проживает гость', checkoutExpected: 'Ожидается выезд', dirty: 'Грязный', cleaning: 'Убирается', inspection: 'Ждёт проверки', cleanReady: 'Чист / Готов', dnd: 'DND', outOfOrder: 'Недоступен',
    checklistTemplates: 'Шаблоны чек-листов', checklistTemplatesText: 'Создавайте гибкие чек-листы для разных типов уборки и меняйте список для отдельной задачи.', editTemplate: 'Изменить шаблон', items: 'пунктов', addItem: 'Добавить пункт', saveTemplate: 'Сохранить шаблон', requiredItem: 'Обязательно', optionalItem: 'Необязательно', editChecklist: 'Изменить чек-лист', addCustomTask: 'Добавить своё дело', checklistUpdated: 'Чек-лист обновлён.', templateSaved: 'Шаблон чек-листа сохранён.', customTask: 'Дополнительное дело',
    publishPreviewTitle: 'Проверка обновления плана', publishPreviewText: 'План на сегодня будет обновлён без сброса уже начатых задач.', safePublishNote: 'Начатые задачи сохраняют таймер, фото, чек-лист и текущий статус.', newTasks: 'Новые задачи', reassigned: 'Переназначено', unchanged: 'Без изменений', removedTasks: 'Удаляется', confirmPublish: 'Опубликовать обновление', protectedTasks: 'активных задач защищено', noPlanChanges: 'Изменений для публикации нет.', taskLocked: 'Задача уже начата — текущая горничная сохранена.',
    aiAssistant: 'AI помощник операций'
  },
  ka: {
    operationsControl: 'ოპერაციების მართვა', systemName: 'ჰაუსქიფინგის მართვის სისტემა',
    heroTitle: 'ერთი სამუშაო სივრცე ნომრებისთვის, თანამშრომლებისთვის, დროისა და ხარისხისთვის.',
    heroText: 'დემო პლატფორმა ნომრების განაწილებისთვის, ფოტო კონტროლისთვის, დროის აღრიცხვისა და სუპერვაიზერის შემოწმებისთვის.',
    firstPass: 'პირველი შემოწმების ხარისხი', avgClean: 'საშ. დალაგების დრო', liveAlerts: 'აქტიური შეტყობინებები',
    demoAccess: 'დემო წვდომა', chooseWorkspace: 'აირჩიეთ სამუშაო სივრცე', credentialsNote: 'დემო ვერსიაში მონაცემები არ მოწმდება. აირჩიეთ როლი.',
    email: 'ელფოსტა', password: 'პაროლი', admin: 'ადმინი', supervisor: 'სუპერვაიზერი', housekeeper: 'დამლაგებელი',
    adminDesc: 'მხოლოდ ანალიტიკა', supervisorDesc: 'განაწილება და QC', housekeeperDesc: 'მობილური სამუშაო პროცესი',
    openDemo: 'დემო სივრცის გახსნა', previewHousekeeper: 'დამლაგებლის ხედვა', logout: 'გასვლა',
    adminConsole: 'ადმინის ანალიტიკა', supervisorConsole: 'სუპერვაიზერის კონსოლი', administrator: 'ადმინისტრატორი',
    dashboard: 'დეშბორდი', time: 'დროის აღრიცხვა', employees: 'დამლაგებლების ანალიტიკა', overview: 'ცვლის მიმოხილვა',
    taskMaker: 'Task Maker', reviews: 'ხარისხის შემოწმება', issues: 'პრობლემები', training: 'სწავლება', tasks: 'დავალებები', shift: 'ცვლა', learn: 'სწავლა',
    hello: 'გამარჯობა, ნინო 👋', morningShift: 'დილის ცვლა · 08:00–16:00',
    weeklyPerformance: 'კვირის შედეგები', weeklyPerformanceText: 'შესვლის დრო, ნომრების რაოდენობა და დალაგების საშუალო დრო მარტივ დიაგრამებში.',
    checkedIn: 'ცვლაზეა', avgRoomTime: 'ნომრის საშ. დრო', roomsDone: 'დალაგებული ნომრები', quality: 'ხარისხი',
    roomsPerDay: 'დალაგებული ნომრები დღეების მიხედვით', avgMinutesByDay: 'დალაგების საშუალო წუთები', employeeWeek: 'დამლაგებლების კვირის სტატისტიკა',
    employee: 'თანამშრომელი', checkIn: 'შესვლა', checkOut: 'გასვლა', worked: 'სამუშაო დრო', roomTime: 'ნომრებში დრო', recleans: 'Re-clean',
    supervisorOverview: 'სუპერვაიზერის საკონტროლო ცენტრი', supervisorOverviewText: 'შექმენით დღიური გეგმა, შეამოწმეთ ფოტოები და მართეთ გამონაკლისები.',
    pendingReview: 'შემოწმების მოლოდინში', reclean: 'Re-clean', unassigned: 'არ არის მინიჭებული', publishedTasks: 'გამოქვეყნებული დავალებები',
    buildPlan: 'დღის ნომრების გეგმა', buildPlanText: '1) დაამატეთ ყველა ნომერი. 2) დაამატეთ ყველა დამლაგებელი. 3) გაუშვით AI სართულების მიხედვით. 4) სურვილისამებრ შეცვალეთ. 5) გამოაქვეყნეთ.',
    buildingSetup: 'ნომრების სია', floors: 'სართულები', roomsPerFloor: 'ნომრები სართულზე', generateRooms: 'ნომრების შექმნა', addAllHotelRooms: 'სასტუმროს ყველა ნომრის დამატება', clearAllRooms: 'ყველა ნომრის წაშლა', clearAllRoomsTitle: 'წავშალოთ ყველა ნომერი Task Maker-იდან?', clearAllRoomsText: 'გასუფთავდება ნომრების სია და მიმდინარე განაწილების მონახაზი. უკვე გამოქვეყნებული ან დაწყებული დავალებები უცვლელი დარჩება.', allRoomsAdded: 'სასტუმროს ნომერი დაემატა', hotelInventoryComplete: 'სასტუმროს ყველა ნომერი უკვე დამატებულია.', addRoom: 'ნომრის დამატება', roomList: 'ნომრები', roomsCleared: 'ყველა ნომერი წაიშალა Task Maker-იდან.',
    housekeepingTeam: 'დამლაგებლების გუნდი', cleanerName: 'დამლაგებლის სახელი', homeFloor: 'სასურველი სართული', addCleaner: 'დამლაგებლის დამატება', activeCleaners: 'დამლაგებლები',
    optimize: 'AI განაწილება სართულებით', publish: 'განაწილების გამოქვეყნება', assignmentPlan: 'განაწილების გეგმა',
    optimizationNote: 'დემო ოპტიმიზატორი ცდილობს თითოეული დამლაგებელი ერთ სართულზე დატოვოს და ნომრები თანაბრად გაყოს. ყველა მინიჭება ხელით რედაქტირდება.',
    floor: 'სართული', room: 'ნომერი', assigned: 'მინიჭებული', priority: 'პრიორიტეტი', status: 'სტატუსი', action: 'ქმედება', remove: 'წაშლა',
    manualOverride: 'ხელით შეცვლილი', optimized: 'ოპტიმიზებული', draft: 'შავი ვერსია', planPublished: 'განაწილება გამოქვეყნდა დამლაგებლების დავალებებში.',
    roomsGenerated: 'ნომრების სია შეიქმნა.', cleanerAdded: 'დამლაგებელი დაემატა.', optimizeDone: 'სართულებზე განაწილება ოპტიმიზებულია. ყველა მინიჭება შეგიძლიათ შეცვალოთ.',
    reviewQueue: 'ფოტო ხარისხის შემოწმება', reviewQueueText: 'შეადარეთ „მანამდე/შემდეგ“ ფოტოები, ნახეთ demo AI სიგნალი და აირჩიეთ Approve ან Re-clean.',
    noReviews: 'შესამოწმებელი ნომრები ამჟამად არ არის.', beforePhoto: 'დალაგებამდე', afterPhoto: 'დალაგების შემდეგ', aiPhotoCheck: 'AI ფოტო შემოწმება',
    aiDemo: 'დემო ევრისტიკა — production-ში Vision API უნდა ჩაერთოს.', likelyClean: 'სავარაუდოდ დალაგებულია', needsAttention: 'საჭიროებს შემოწმებას', flaggedIssue: 'ამ ნომერზე ღია პრობლემაა', noPhoto: 'ფოტო არ არის',
    approveRoom: 'Approve', returnReclean: 'Re-clean', reason: 'მიზეზი', sendReclean: 'Re-clean-ის გაგზავნა', cancel: 'გაუქმება',
    issueCenter: 'პრობლემების ცენტრი', issueCenterText: 'დამლაგებლების მიერ ფოტოთი დაფიქსირებული პრობლემები.', noIssues: 'პრობლემები არ არის დაფიქსირებული.',
    issueType: 'პრობლემის ტიპი', description: 'აღწერა', reportedBy: 'ავტორი', reportedAt: 'დრო', issuePhoto: 'პრობლემის ფოტო',
    myTasks: 'ჩემი დავალებები', remaining: 'დარჩენილია', todayProgress: 'დღევანდელი პროგრესი', startTask: 'დაწყება', openTask: 'გახსნა',
    deadline: 'დედლაინი', expected: 'ნორმა', cleaningTime: 'დალაგების დრო', pause: 'პაუზა', resume: 'გაგრძელება', checklist: 'ჩეკლისტი',
    photoProof: 'ნომრის ფოტო მტკიცებულება', beforeHint: 'გადაიღეთ/დაამატეთ ფოტო დალაგებამდე.', afterHint: 'გადაიღეთ/დაამატეთ ფოტო დალაგების შემდეგ. გაგზავნისთვის მინიმუმ ერთი „შემდეგ“ ფოტო საჭიროა.',
    takeBefore: 'ფოტო დალაგებამდე', takeAfter: 'ფოტო დალაგების შემდეგ', reportIssue: 'პრობლემის დაფიქსირება', describeIssue: 'აღწერეთ პრობლემა…',
    addIssuePhoto: 'პრობლემის ფოტოს დამატება', sendIssue: 'პრობლემის გაგზავნა', submitReview: 'შემოწმებაზე გაგზავნა',
    completeChecklist: 'ჯერ დაასრულეთ ჩეკლისტი.', afterRequired: 'დაამატეთ მინიმუმ ერთი ფოტო დალაგების შემდეგ.', photoAttached: 'ფოტო დაემატა.',
    issueSent: 'პრობლემა გაეგზავნა სუპერვაიზერს და დაემატა პრობლემების სიაში.', issueNeedContent:'გაგზავნამდე დაამატეთ ფოტო ან აღწერა.', issueNoDescription:'ფოტო-ანგარიში აღწერის გარეშე', issueReceipt:'წარმატებით გაიგზავნა', issueReceiptText:'ზუსტად ეს ფოტო და შეტყობინება ინახება „პრობლემების“ ჩანართში.', submitted: 'გაიგზავნა სუპერვაიზერის შემოწმებაზე.',
    draftIssues: 'ჯერ არ გაგზავნილა', draftIssueHint: 'შენახულია ამ დავალებაში, მაგრამ სუპერვაიზერთან ჯერ არ გაგზავნილა. გახსენით დავალება, დაამატეთ აღწერა და გააგზავნეთ.', continueIssue: 'დავალების გახსნა და გაგზავნა',
    back: 'უკან', details: 'დეტალები', close: 'დახურვა', allTasks: 'ყველა სამუშაო დავალება', allTasksText: 'გამოქვეყნებული ნომრები და მიმდინარე სტატუსები.', noTasks: 'დავალებები ჯერ არ არის.',
    trainingTitle: 'სწავლება', trainingText: 'ვიდეო გაკვეთილები, პრაქტიკული მაგალითები და მინი ტესტები.',
    onboardingProgress: 'სწავლების პროგრესი', modulesPassed: 'მოდული გავლილია', videosTests: 'ვიდეოები + მინი ტესტები', passed: 'გავლილი', toDo: 'გასავლელი',
    reviewLesson: 'გაკვეთილის გამეორება', startLesson: 'გაკვეთილის დაწყება', trainingModule: 'სასწავლო მოდული', practicalExamples: 'პრაქტიკული მაგალითები', goodExample: 'სწორი მაგალითი', badExample: 'არ გააკეთოთ',
    quickCheck: 'სწრაფი ტესტი', quizTitle: '2-კითხვიანი ტესტი', submitTest: 'ტესტის გაგზავნა', passMark: 'გასავლელი ზღვარი: 50%. გადაბარება შესაძლებელია მაშინვე.', testPassed: 'ტესტი ჩაბარებულია', tryAgain: 'სცადეთ თავიდან',
    readAloud: 'დავალების ხმამაღლა წაკითხვა', stopVoice: 'შეჩერება', voiceReading: 'VoiceReader კითხულობს დავალებას…', voiceStopped: 'VoiceReader შეჩერდა.', voiceUnsupported: 'VoiceReader ამ ბრაუზერში არ არის მხარდაჭერილი.',
    quickCreateTask: '+ დავალების შექმნა', createTaskTitle: 'ერთი ნომრის დავალების დამატება', taskType: 'დალაგების ტიპი', assignTo: 'მინიჭება', expectedMinutes: 'მოსალოდნელი წუთები', create: 'დავალების შექმნა',
    taskCreated: 'დავალება დაემატა და მაშინვე გაეგზავნა არჩეულ დამლაგებელს.', deleteTask: 'დავალების წაშლა', deleteTaskTitle: 'წავშალოთ ეს დავალება?', deleteTaskText: 'დავალება ასევე გაქრება დამლაგებლის სიიდან.', confirmDelete: 'წაშლა', taskDeleted: 'დავალება წაიშალა.',
    checkoutCleaning: 'Checkout დალაგება', stayoverCleaning: 'დარჩენილი სტუმრის დალაგება', deepCleaning: 'ღრმა დალაგება', dailyCleaning: 'ნომრის ყოველდღიური დალაგება',
    shiftStatus: 'ცვლის სტატუსი', tasksCompleted: 'დასრულებული დავალებები', trackedCleaning: 'აღრიცხული დალაგება', qualityScore: 'ხარისხის ქულა',
    photoPreview: 'ფოტოს ნახვა', deletePhoto: 'ფოტოს წაშლა', approved: 'ნომერი დამტკიცებულია.', recleanSent: 'ნომერი დაბრუნდა Re-clean-ზე.',
    reasonRequired: 'მიუთითეთ Re-clean-ის მიზეზი.', nameRequired: 'შეიყვანეთ დამლაგებლის სახელი.',
    maintenance: 'ტექნიკური პრობლემა', brokenItem: 'დაზიანებული ნივთი', missingItem: 'დაკარგული ნივთი', other: 'სხვა',
    urgent: 'სასწრაფო', high: 'მაღალი', medium: 'საშუალო', low: 'დაბალი', pending: 'მოლოდინში', inProgress: 'მიმდინარე', review: 'შემოწმება', completed: 'დასრულებული',
    hotelInventory: 'სასტუმროს ნომრები', inventoryText: 'მართეთ ნომრების სტატუსები და განსაზღვრეთ, რა საჭიროებს დალაგებას დღეს.', roomStatus: 'ნომრის სტატუსი', cleaningType: 'დალაგების ტიპი', needsTask: 'საჭიროა დავალება', noTask: 'დავალება არ არის',
    occupied: 'სტუმარი ცხოვრობს', checkoutExpected: 'გასვლა მოსალოდნელია', dirty: 'დასალაგებელია', cleaning: 'ლაგდება', inspection: 'შემოწმება', cleanReady: 'სუფთა / მზადაა', dnd: 'DND', outOfOrder: 'არ მუშაობს',
    checklistTemplates: 'ჩეკლისტის შაბლონები', checklistTemplatesText: 'შექმენით მოქნილი ჩეკლისტები სხვადასხვა ტიპის დალაგებისთვის და შეცვალეთ კონკრეტული დავალება.', editTemplate: 'შაბლონის შეცვლა', items: 'პუნქტი', addItem: 'პუნქტის დამატება', saveTemplate: 'შაბლონის შენახვა', requiredItem: 'სავალდებულო', optionalItem: 'არასავალდებულო', editChecklist: 'ჩეკლისტის შეცვლა', addCustomTask: 'საკუთარი საქმის დამატება', checklistUpdated: 'ჩეკლისტი განახლდა.', templateSaved: 'ჩეკლისტის შაბლონი შენახულია.', customTask: 'დამატებითი საქმე',
    publishPreviewTitle: 'გეგმის განახლების შემოწმება', publishPreviewText: 'დღევანდელი გეგმა განახლდება დაწყებული დავალებების პროგრესის დაკარგვის გარეშე.', safePublishNote: 'დაწყებული დავალებები ინარჩუნებს ტაიმერს, ფოტოებს, ჩეკლისტს და სტატუსს.', newTasks: 'ახალი დავალებები', reassigned: 'გადანაწილდა', unchanged: 'უცვლელი', removedTasks: 'წაიშლება', confirmPublish: 'განახლების გამოქვეყნება', protectedTasks: 'აქტიური დავალება დაცულია', noPlanChanges: 'გამოსაქვეყნებელი ცვლილება არ არის.', taskLocked: 'დავალება უკვე დაწყებულია — მიმდინარე დამლაგებელი დაცულია.',
    aiAssistant: 'AI ოპერაციების ასისტენტი'
  }
};

const t = key => I18N[state.lang]?.[key] ?? I18N.en[key] ?? key;
const priorities = ['Urgent', 'High', 'Medium', 'Low'];
const roomChecklist = {
  en: ['Change bed linen', 'Make the bed', 'Dust all surfaces', 'Clean floor', 'Clean toilet & shower', 'Replace towels & amenities', 'Check minibar / TV / AC', 'Final visual inspection'],
  ru: ['Сменить постельное белье', 'Заправить кровать', 'Удалить пыль со всех поверхностей', 'Вымыть пол', 'Очистить туалет и душ', 'Заменить полотенца и amenities', 'Проверить минибар / TV / AC', 'Финальный визуальный осмотр'],
  ka: ['თეთრეულის შეცვლა', 'საწოლის გასწორება', 'ზედაპირების გაწმენდა', 'იატაკის გაწმენდა', 'ტუალეტისა და შხაპის გაწმენდა', 'პირსახოცებისა და ჰიგიენის ნივთების შეცვლა', 'მინიბარის / TV / AC შემოწმება', 'საბოლოო ვიზუალური შემოწმება']
};


const ROOM_STATUSES = ['Occupied', 'Checkout expected', 'Dirty', 'Cleaning', 'Inspection', 'Clean / Ready', 'DND', 'Out of Order'];
const AUTO_TASK_ROOM_STATUSES = new Set(['Checkout expected', 'Dirty']);
const TASK_TYPES = ['Checkout cleaning', 'Stayover cleaning', 'Deep cleaning', 'Daily room cleaning'];

function localizedLabel(label) {
  if (label && typeof label === 'object') return label[state.lang] || label.en || Object.values(label)[0] || '';
  return String(label || '');
}
function labelSet(en, ru, ka) { return { en, ru, ka }; }
function seedItem(id, en, ru, ka, required = true) { return { id, label: labelSet(en, ru, ka), required }; }

const checklistTemplateSeed = {
  'Checkout cleaning': [
    seedItem('co-1', 'Remove used bed linen', 'Снять использованное постельное бельё', 'გამოყენებული თეთრეულის მოხსნა'),
    seedItem('co-2', 'Make bed with fresh linen', 'Заправить кровать чистым бельём', 'საწოლის ახალი თეთრეულით გასწორება'),
    seedItem('co-3', 'Dust all surfaces', 'Протереть все поверхности', 'ყველა ზედაპირის გაწმენდა'),
    seedItem('co-4', 'Clean bathroom and shower', 'Убрать ванную и душ', 'აბაზანისა და შხაპის გაწმენდა'),
    seedItem('co-5', 'Disinfect toilet and sink', 'Продезинфицировать туалет и раковину', 'ტუალეტისა და ნიჟარის დეზინფექცია'),
    seedItem('co-6', 'Vacuum / mop floor', 'Пропылесосить / вымыть пол', 'იატაკის მტვერსასრუტით / სველი წესით გაწმენდა'),
    seedItem('co-7', 'Refill towels and amenities', 'Пополнить полотенца и amenities', 'პირსახოცებისა და ჰიგიენის ნივთების შევსება'),
    seedItem('co-8', 'Final room inspection', 'Финальная проверка номера', 'ნომრის საბოლოო შემოწმება')
  ],
  'Stayover cleaning': [
    seedItem('st-1', 'Make / straighten the bed', 'Заправить / поправить кровать', 'საწოლის გასწორება'),
    seedItem('st-2', 'Remove trash', 'Убрать мусор', 'ნაგვის გატანა'),
    seedItem('st-3', 'Wipe used surfaces', 'Протереть используемые поверхности', 'გამოყენებული ზედაპირების გაწმენდა'),
    seedItem('st-4', 'Refresh bathroom', 'Освежить ванную комнату', 'აბაზანის მოწესრიგება'),
    seedItem('st-5', 'Replace used towels', 'Заменить использованные полотенца', 'გამოყენებული პირსახოცების შეცვლა'),
    seedItem('st-6', 'Refill requested amenities', 'Пополнить нужные amenities', 'საჭირო ჰიგიენის ნივთების შევსება', false)
  ],
  'Deep cleaning': [
    seedItem('dp-1', 'Strip and remake bed', 'Снять и заменить постельное бельё', 'თეთრეულის სრულად შეცვლა'),
    seedItem('dp-2', 'Dust high and low surfaces', 'Протереть верхние и нижние поверхности', 'მაღალი და დაბალი ზედაპირების გაწმენდა'),
    seedItem('dp-3', 'Move light furniture and clean behind it', 'Отодвинуть лёгкую мебель и убрать за ней', 'მსუბუქი ავეჯის უკან გაწმენდა'),
    seedItem('dp-4', 'Deep-clean bathroom', 'Глубокая уборка ванной', 'აბაზანის ღრმა დალაგება'),
    seedItem('dp-5', 'Descale shower and fixtures', 'Удалить налёт с душа и сантехники', 'შხაპისა და სანტექნიკის ნადების გაწმენდა'),
    seedItem('dp-6', 'Clean mirrors and glass', 'Очистить зеркала и стекло', 'სარკეებისა და მინის გაწმენდა'),
    seedItem('dp-7', 'Vacuum mattress / upholstery', 'Пропылесосить матрас / мягкую мебель', 'მატრასისა და რბილი ავეჯის მტვერსასრუტით გაწმენდა'),
    seedItem('dp-8', 'Check AC / vents', 'Проверить кондиционер / вентиляцию', 'კონდიციონერის / ვენტილაციის შემოწმება'),
    seedItem('dp-9', 'Refill all amenities', 'Полностью пополнить amenities', 'ყველა ჰიგიენის ნივთის შევსება'),
    seedItem('dp-10', 'Final detailed inspection', 'Финальная детальная проверка', 'საბოლოო დეტალური შემოწმება')
  ],
  'Daily room cleaning': [
    seedItem('dy-1', 'Make the bed', 'Заправить кровать', 'საწოლის გასწორება'),
    seedItem('dy-2', 'Remove trash', 'Убрать мусор', 'ნაგვის გატანა'),
    seedItem('dy-3', 'Dust and wipe surfaces', 'Протереть пыль и поверхности', 'მტვრისა და ზედაპირების გაწმენდა'),
    seedItem('dy-4', 'Clean bathroom', 'Убрать ванную', 'აბაზანის გაწმენდა'),
    seedItem('dy-5', 'Vacuum / mop floor', 'Пропылесосить / вымыть пол', 'იატაკის გაწმენდა'),
    seedItem('dy-6', 'Final visual check', 'Финальный визуальный осмотр', 'საბოლოო ვიზუალური შემოწმება')
  ]
};

function cloneTemplateSeed() { return JSON.parse(JSON.stringify(checklistTemplateSeed)); }
function defaultRoomStatus(floor, roomIndex) {
  const cycle = ['Clean / Ready', 'Occupied', 'Checkout expected', 'Dirty', 'Clean / Ready', 'Clean / Ready', 'DND', 'Clean / Ready', 'Out of Order', 'Dirty'];
  return cycle[(floor + roomIndex - 2) % cycle.length];
}
function cleaningTypeForStatus(status) {
  if (status === 'Checkout expected') return 'Checkout cleaning';
  if (status === 'Occupied') return 'Stayover cleaning';
  return 'Daily room cleaning';
}
function roomNeedsCleaning(room) { return AUTO_TASK_ROOM_STATUSES.has(room.roomStatus); }

const lessonContent = {
 1:{title:{en:'Room Safety & PPE',ka:'ნომრის უსაფრთხოება და PPE',ru:'Безопасность номера и PPE'},desc:{en:'Basic safety before entering and cleaning a room.',ka:'ძირითადი უსაფრთხოება ნომერში შესვლამდე და დალაგებამდე.',ru:'Базовая безопасность перед входом и уборкой номера.'},examples:{en:[['Check hazards first','Look for wet floors, broken glass and exposed wires before starting.'],['Never rush past a hazard','Do not start cleaning until a dangerous area is isolated or reported.']],ka:[['ჯერ შეამოწმეთ საფრთხეები','დალაგებამდე შეამოწმეთ სველი იატაკი, გატეხილი მინა და ღია სადენები.'],['არ უგულებელყოთ საფრთხე','საშიში ზონა ჯერ უნდა შემოიზღუდოს ან დაფიქსირდეს.']],ru:[['Сначала проверьте риски','Перед уборкой проверьте мокрый пол, разбитое стекло и открытые провода.'],['Не игнорируйте опасность','Не начинайте уборку, пока опасная зона не изолирована или не зарегистрирована.']]},quiz:{en:[['Before cleaning, what should you do first?',['Start vacuuming immediately','Check the room for hazards','Open minibar','Turn off all lights'],1],['If you find damaged property, what is the correct action?',['Ignore it','Move it to another room','Report it with details/photo','Throw it away'],2]],ka:[['დალაგებამდე რა უნდა გააკეთოთ პირველად?',['დაუყოვნებლივ დაიწყოთ მტვერსასრუტი','შეამოწმოთ შესაძლო საფრთხეები','გახსნათ მინიბარი','გამორთოთ ყველა ნათურა'],1],['დაზიანებული ნივთის აღმოჩენისას როგორ იქცევით?',['უგულებელყოფთ','სხვა ნომერში გადაიტანთ','აფიქსირებთ აღწერით/ფოტოთი','გადააგდებთ'],2]],ru:[['Что нужно сделать перед уборкой?',['Сразу начать пылесосить','Проверить номер на риски','Открыть минибар','Выключить весь свет'],1],['Что делать при обнаружении поврежденного имущества?',['Игнорировать','Перенести в другой номер','Сообщить с описанием/фото','Выбросить'],2]]}},
 2:{title:{en:'Cleaning Standards',ka:'დალაგების სტანდარტები',ru:'Стандарты уборки'},desc:{en:'Standard sequence, hygiene separation and final inspection.',ka:'სტანდარტული თანმიმდევრობა, ჰიგიენური ზონები და საბოლოო შემოწმება.',ru:'Стандартная последовательность, разделение зон и финальная проверка.'},examples:{en:[['Work top-to-bottom','Dust high surfaces first so the floor is cleaned last.'],['Separate bathroom tools','Do not use the same cloth for toilet and bedroom surfaces.']],ka:[['იმუშავეთ ზემოდან ქვემოთ','ჯერ გაწმინდეთ მაღალი ზედაპირები და იატაკი ბოლოს.'],['გამოყავით აბაზანის ინვენტარი','ტუალეტისა და საძინებლისთვის ერთი ქსოვილი არ გამოიყენოთ.']],ru:[['Работайте сверху вниз','Сначала верхние поверхности, пол — в конце.'],['Разделяйте инвентарь','Не используйте одну салфетку для туалета и жилой зоны.']]},quiz:{en:[['What is the recommended cleaning direction?',['Bottom-to-top only','Random order','Top-to-bottom','Door-to-window only'],2],['What should happen before the room is submitted?',['Skip the bathroom','Final visual inspection','Remove the checklist','Pause the timer'],1]],ka:[['რა მიმართულებით არის რეკომენდებული დალაგება?',['მხოლოდ ქვემოდან ზემოთ','შემთხვევითი რიგით','ზემოდან ქვემოთ','მხოლოდ კარიდან ფანჯრამდე'],2],['დავალების გაგზავნამდე რა უნდა მოხდეს?',['აბაზანის გამოტოვება','საბოლოო ვიზუალური შემოწმება','ჩეკლისტის წაშლა','ტაიმერის დაპაუზება'],1]],ru:[['Какое направление уборки рекомендуется?',['Только снизу вверх','В случайном порядке','Сверху вниз','Только от двери к окну'],2],['Что нужно сделать перед отправкой номера?',['Пропустить ванную','Финальный визуальный осмотр','Удалить чек-лист','Поставить таймер на паузу'],1]]}},
 3:{title:{en:'Issue Reporting',ka:'პრობლემების დაფიქსირება',ru:'Регистрация проблем'},desc:{en:'How to report broken items and maintenance issues with photo evidence.',ka:'როგორ დაფიქსირდეს დაზიანება და ტექნიკური პრობლემა ფოტოთი.',ru:'Как фиксировать поломки и технические проблемы с фото.'},examples:{en:[['Show context in the photo','Capture the broken item and enough surrounding area to identify the location.'],['Write a specific description','“Lamp does not turn on” is better than “Something is wrong”.']],ka:[['ფოტოზე აჩვენეთ კონტექსტი','გადაიღეთ დაზიანება და საკმარისი გარემო, რომ ლოკაცია გასაგები იყოს.'],['აღწერეთ კონკრეტულად','„სანათი არ ირთვება“ უკეთესია, ვიდრე „რაღაც გაფუჭებულია“.']],ru:[['Покажите контекст на фото','Снимите поломку и окружающую область, чтобы было понятно место.'],['Пишите конкретно','«Лампа не включается» лучше, чем «Что-то сломано».']]},quiz:{en:[['A useful issue photo should be…',['Clear and related to the problem','A selfie','Completely dark','Optional in every case'],0],['An issue ticket should include…',['Only room number','Only employee name','Problem description and location','No description'],2]],ka:[['კარგი პრობლემის ფოტო უნდა იყოს…',['მკაფიო და პრობლემასთან დაკავშირებული','სელფი','ძალიან ბნელი','ყოველთვის არასავალდებულო'],0],['პრობლემის ტიკეტი უნდა შეიცავდეს…',['მხოლოდ ნომერს','მხოლოდ თანამშრომლის სახელს','პრობლემის აღწერას და ლოკაციას','აღწერა არ სჭირდება'],2]],ru:[['Хорошее фото проблемы должно быть…',['Четким и связанным с проблемой','Селфи','Полностью темным','Всегда необязательным'],0],['Тикет должен содержать…',['Только номер комнаты','Только имя сотрудника','Описание проблемы и локацию','Без описания'],2]]}},
 4:{title:{en:'Guest Interaction',ka:'სტუმართან კომუნიკაცია',ru:'Общение с гостями'},desc:{en:'Privacy, courtesy and what to do when a guest is inside the room.',ka:'კონფიდენციალურობა, თავაზიანობა და ქცევა ნომერში სტუმრის ყოფნისას.',ru:'Приватность, вежливость и действия, если гость находится в номере.'},examples:{en:[['Confirm before entering','Knock, announce housekeeping and wait for a response.'],['Protect guest privacy','Never photograph personal belongings unless required for a documented incident.']],ka:[['შესვლამდე დაადასტურეთ','დააკაკუნეთ, თქვით housekeeping და დაელოდეთ პასუხს.'],['დაიცავით კონფიდენციალურობა','სტუმრის პირადი ნივთები არ გადაიღოთ, თუ ინციდენტისთვის აუცილებელი არ არის.']],ru:[['Подтвердите вход','Постучите, объявите housekeeping и дождитесь ответа.'],['Защищайте приватность','Не фотографируйте личные вещи гостя без необходимости для зарегистрированного инцидента.']]},quiz:{en:[['Before entering an occupied room, you should…',['Enter immediately','Knock and announce housekeeping','Call another cleaner','Turn off corridor lights'],1],['Guest personal information should be…',['Shared in team chat','Protected and minimized','Written on public board','Added to every issue'],1]],ka:[['დაკავებულ ნომერში შესვლამდე საჭიროა…',['დაუყოვნებლივ შესვლა','დაკაკუნება და housekeeping-ის გამოცხადება','სხვა დამლაგებლის გამოძახება','დერეფნის შუქის გამორთვა'],1],['სტუმრის პირადი ინფორმაცია უნდა იყოს…',['გავრცელებული ჯგუფურ ჩატში','დაცული და მინიმალურად გამოყენებული','დაწერილი საჯარო დაფაზე','დამატებული ყველა პრობლემაში'],1]],ru:[['Перед входом в занятый номер нужно…',['Сразу войти','Постучать и объявить housekeeping','Позвать другого сотрудника','Выключить свет в коридоре'],1],['Персональные данные гостя нужно…',['Публиковать в командном чате','Защищать и использовать по минимуму','Писать на общей доске','Добавлять в каждый тикет'],1]]}},
 5:{title:{en:'Re-clean & Quality Control',ka:'Re-clean და ხარისხის კონტროლი',ru:'Re-clean и контроль качества'},desc:{en:'How to respond to rejected work and close a Re-clean correctly.',ka:'როგორ შესრულდეს უარყოფილი სამუშაო ხელახლა და სწორად დაიხუროს Re-clean.',ru:'Как исправлять отклоненную уборку и правильно закрывать Re-clean.'},examples:{en:[['Read the reason first','Fix exactly what the supervisor identified before rechecking the whole zone.'],['Attach final proof','Take a clear after-photo before submitting the Re-clean.']],ka:[['ჯერ წაიკითხეთ მიზეზი','ჯერ გამოასწორეთ ის, რაც სუპერვაიზერმა მიუთითა, შემდეგ გადაამოწმეთ მთელი ზონა.'],['დაამატეთ საბოლოო ფოტო','Re-clean-ის გაგზავნამდე გადაიღეთ მკაფიო „შემდეგ“ ფოტო.']],ru:[['Сначала прочитайте причину','Сначала исправьте то, что указал супервайзер, затем перепроверьте всю зону.'],['Приложите итоговое фото','Перед отправкой Re-clean сделайте четкое фото после исправления.']]},quiz:{en:[['A Re-clean should be closed only after…',['Ignoring the comment','Correcting the issue and attaching proof','Changing the room number','Starting another task'],1],['The supervisor reason is useful because it…',['Identifies what must be corrected','Replaces the checklist','Cancels the task','Changes the employee automatically'],0]],ka:[['Re-clean როდის შეიძლება დაიხუროს?',['კომენტარის უგულებელყოფის შემდეგ','პრობლემის გამოსწორებისა და ფოტოს დამატების შემდეგ','ნომრის შეცვლის შემდეგ','სხვა დავალების დაწყების შემდეგ'],1],['სუპერვაიზერის მიზეზი საჭიროა, რადგან…',['ზუსტად მიუთითებს რა უნდა გამოსწორდეს','ჩეკლისტს ანაცვლებს','დავალებას აუქმებს','თანამშრომელს ავტომატურად ცვლის'],0]],ru:[['Когда можно закрыть Re-clean?',['После игнорирования комментария','После исправления и фото-подтверждения','После смены номера','После начала другой задачи'],1],['Причина супервайзера нужна, потому что…',['Показывает, что именно исправить','Заменяет чек-лист','Отменяет задачу','Автоматически меняет сотрудника'],0]]}},
 6:{title:{en:'Time & Task Discipline',ka:'დრო და დავალებების დისციპლინა',ru:'Дисциплина времени и задач'},desc:{en:'Accurate check-in, pause reasons, deadlines and smart task sequencing.',ka:'ზუსტი check-in, პაუზის მიზეზები, ვადები და დავალებების სწორი თანმიმდევრობა.',ru:'Точный check-in, причины паузы, дедлайны и правильная последовательность задач.'},examples:{en:[['Start the timer when work starts','Do not check in long before entering the room.'],['Pause with a real reason','Guest in room, missing supplies or maintenance are valid operational reasons.']],ka:[['ტაიმერი დაიწყეთ რეალურ დაწყებაზე','ნომერში შესვლამდე დიდი ხნით ადრე check-in არ გააკეთოთ.'],['პაუზას მიუთითეთ რეალური მიზეზი','სტუმარი ნომერში, მარაგის არქონა ან ტექნიკური პრობლემა რეალური მიზეზებია.']],ru:[['Запускайте таймер при фактическом старте','Не делайте check-in задолго до входа в номер.'],['Указывайте реальную причину паузы','Гость в номере, отсутствие расходников или техпроблема — нормальные причины.']]},quiz:{en:[['When should task time tracking start?',['At actual work start','At the beginning of the week','After supervisor review','Only after completion'],0],['A good task sequence should generally…',['Create unnecessary floor changes','Keep nearby work together when priorities allow','Ignore urgent deadlines','Assign all work to one person'],1]],ka:[['როდის უნდა დაიწყოს დროის აღრიცხვა?',['რეალური სამუშაოს დაწყებისას','კვირის დასაწყისში','სუპერვაიზერის შემოწმების შემდეგ','მხოლოდ დასრულების მერე'],0],['კარგი დავალებების თანმიმდევრობა ჩვეულებრივ…',['ქმნის ზედმეტ სართულებს შორის მოძრაობას','აერთიანებს ახლო დავალებებს, თუ პრიორიტეტი საშუალებას იძლევა','უგულებელყოფს სასწრაფო ვადებს','ყველაფერს ერთ თანამშრომელს აძლევს'],1]],ru:[['Когда должен начинаться учет времени?',['При фактическом начале работы','В начале недели','После проверки супервайзера','Только после завершения'],0],['Хорошая последовательность задач обычно…',['Создает лишние переходы между этажами','Группирует близкие задачи, если приоритет позволяет','Игнорирует срочные дедлайны','Назначает все одному сотруднику'],1]]}}
};

const icons = {
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3l1.2 3.2L16 7.5l-2.8 1.3L12 12l-1.2-3.2L8 7.5l2.8-1.3L12 3Z"/><path d="M18 13l.8 2.2L21 16l-2.2.8L18 19l-.8-2.2L15 16l2.2-.8L18 13Z"/><path d="M6 14l.7 1.8L8.5 16.5l-1.8.7L6 19l-.7-1.8-1.8-.7 1.8-.7L6 14Z"/></svg>',
  compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/></svg>',
  'check-circle': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></svg>',
  broom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m14 4 6-2 2 2-6 6"/><path d="m14 7-7 7"/><path d="M4 14c2-2 5-1 6 0l-5 6H2l2-6Z"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></svg>',
  logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M10 17l5-5-5-5"/><path d="M15 12H3"/><path d="M13 3h8v18h-8"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 7h4l1.5-2h5L16 7h4v12H4V7Z"/><circle cx="12" cy="13" r="3.5"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m9 7 8 5-8 5V7Z"/></svg>',
  'play-circle': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="m10 9 5 3-5 3V9Z"/></svg>',
  image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8" cy="9" r="1.5"/><path d="m5 18 5-5 3 3 2-2 4 4"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-4 2-6 6-6s6 2 6 6"/><path d="M16 5a3 3 0 0 1 0 6"/><path d="M17 14c3 .5 4 2.5 4 6"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 20V10h4v10"/><path d="M10 20V4h4v16"/><path d="M16 20v-7h4v7"/></svg>',
  wand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m4 20 11-11"/><path d="m14 4 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z"/><path d="m19 12 .7 1.3L21 14l-1.3.7L19 16l-.7-1.3L17 14l1.3-.7L19 12Z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m6 6 12 12M18 6 6 18"/></svg>'
};

function renderIcons(root = document) {
  $$('[data-icon]', root).forEach(el => {
    const key = el.dataset.icon;
    if (icons[key]) el.innerHTML = icons[key];
  });
}

function svgPlaceholder(label, subtitle, tone = 'teal') {
  const palettes = {
    teal: ['#dff7f4', '#0f766e'],
    slate: ['#e8edf4', '#475569'],
    amber: ['#fff1d6', '#b45309']
  };
  const [bg, fg] = palettes[tone] || palettes.teal;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewBox="0 0 900 600">
    <rect width="900" height="600" fill="${bg}"/>
    <rect x="70" y="70" width="760" height="460" rx="36" fill="white" opacity=".78"/>
    <text x="450" y="280" text-anchor="middle" font-family="Arial" font-size="58" font-weight="700" fill="${fg}">${label}</text>
    <text x="450" y="340" text-anchor="middle" font-family="Arial" font-size="28" fill="#64748b">${subtitle}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function photo(name, url) { return { id: crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`, name, url }; }

const state = {
  lang: 'ru',
  role: 'admin',
  desktopRole: 'admin',
  currentDesktopView: 'dashboard',
  mobileView: 'tasks',
  previewFromDesktop: false,
  mobileUserName: 'Nino',
  inventoryFloor: 1,
  checklistTemplates: cloneTemplateSeed(),
  activeTaskId: null,
  jumpToIssueForm: false,
  lastSentIssueId: null,
  timerInterval: null,
  voiceUtterance: null,
  training: {
    lessons: [1,2,3,4,5,6].map((id, i) => ({ id, duration: i < 3 ? '0:08' : '0:10', video: ['safety','standards','issues','guest','reclean','time'][i] + '.mp4', watched: id === 1, passed: id === 1, score: id === 1 ? 100 : 0 })),
    activeLessonId: null
  },
  maker: {
    floors: 7,
    roomsPerFloor: 10,
    rooms: [],
    cleaners: [
      { id: 1, name: 'Nino', homeFloor: 1 }, { id: 2, name: 'Ana', homeFloor: 2 },
      { id: 3, name: 'Mari', homeFloor: 3 }, { id: 4, name: 'Lika', homeFloor: 4 },
      { id: 5, name: 'Tamar', homeFloor: 5 }, { id: 6, name: 'Maka', homeFloor: 6 },
      { id: 7, name: 'Sopo', homeFloor: 7 }, { id: 8, name: 'Natia', homeFloor: 7 }
    ],
    optimized: false,
    publishedAt: null
  },
  tasks: [
    {
      id: 1001, roomNumber: '304', location: 'Room 304', floor: 3, type: 'Checkout cleaning', assignee: 'Nino', priority: 'Urgent',
      status: 'In Progress', deadline: '13:30', expected: 30, elapsed: 1112, checklist: [1,1,1,0,0,0,0,0], beforePhotos: [], afterPhotos: [], issuePhotos: [], source: 'demo'
    },
    {
      id: 1002, roomNumber: '212', location: 'Room 212', floor: 2, type: 'Deep cleaning', assignee: 'Mari', priority: 'Medium',
      status: 'Review', deadline: '15:30', expected: 50, elapsed: 3080, checklist: Array(8).fill(1),
      beforePhotos: [photo('room-212-before.svg', svgPlaceholder('BEFORE', 'Room 212 · demo preview', 'slate'))],
      afterPhotos: [photo('room-212-after.svg', svgPlaceholder('AFTER', 'Room 212 · demo preview', 'teal'))], issuePhotos: [], source: 'demo', aiQuality: { score: 96, verdict: 'clean' }
    },
    {
      id: 1003, roomNumber: '118', location: 'Room 118', floor: 1, type: 'Stayover cleaning', assignee: 'Nino', priority: 'High',
      status: 'Re-clean', deadline: '14:10', expected: 25, elapsed: 1760, checklist: [1,1,0,0,0,0,0,0], beforePhotos: [], afterPhotos: [], issuePhotos: [],
      reclean: true, recleanReason: 'Bathroom mirror and shower glass must be redone.', source: 'demo'
    },
    {
      id: 1004, roomNumber: '309', location: 'Room 309', floor: 3, type: 'Checkout cleaning', assignee: 'Nino', priority: 'High',
      status: 'Pending', deadline: '14:20', expected: 30, elapsed: 0, checklist: Array(8).fill(0), beforePhotos: [], afterPhotos: [], issuePhotos: [], source: 'demo'
    }
  ],
  issues: [
    {
      id: 5001, taskId: 1002, location: 'Room 212', type: 'Maintenance', text: 'Bathroom drain is slow.', reportedBy: 'Mari', status: 'Open', time: '11:42',
      photos: [photo('drain-demo.svg', svgPlaceholder('ISSUE', 'Bathroom drain · demo preview', 'amber'))]
    }
  ]
};

function taskRoomKey(value) { return `${Number(value.floor) || 0}:${String(value.roomNumber ?? value.number ?? '')}`; }
function cloneChecklistForTask(type) {
  const template = state.checklistTemplates?.[type] || state.checklistTemplates?.['Daily room cleaning'] || checklistTemplateSeed['Daily room cleaning'];
  return (template || []).map((item, index) => ({
    id: `${item.id || 'item'}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 6)}`,
    label: JSON.parse(JSON.stringify(item.label || labelSet(String(item.text || ''), String(item.text || ''), String(item.text || '')))),
    required: item.required !== false,
    checked: false,
    custom: Boolean(item.custom)
  }));
}
function ensureChecklistItems(task) {
  if (!task) return [];
  if (!Array.isArray(task.checklistItems)) {
    const old = Array.isArray(task.checklist) ? task.checklist : [];
    const base = cloneChecklistForTask(task.type || 'Daily room cleaning');
    task.checklistItems = base.map((item, i) => ({ ...item, checked: Boolean(old[i]) }));
    if (!base.length && old.length) {
      task.checklistItems = old.map((checked, i) => ({ id: `legacy-${task.id}-${i}`, label: labelSet(roomChecklist.en[i] || `Task ${i+1}`, roomChecklist.ru[i] || `Задача ${i+1}`, roomChecklist.ka[i] || `დავალება ${i+1}`), required: true, checked: Boolean(checked) }));
    }
  }
  return task.checklistItems;
}
function findInventoryRoom(task) { return state.maker.rooms.find(room => taskRoomKey(room) === taskRoomKey(task)); }
function setRoomStatusForTask(task, roomStatus) {
  const room = findInventoryRoom(task);
  if (!room) return;
  room.roomStatus = roomStatus;
  if (roomStatus === 'Checkout expected') room.cleaningType = 'Checkout cleaning';
  if (roomStatus === 'Dirty' && !room.cleaningType) room.cleaningType = 'Daily room cleaning';
}
function normalizeOperationalState() {
  state.checklistTemplates = state.checklistTemplates || cloneTemplateSeed();
  TASK_TYPES.forEach(type => { if (!Array.isArray(state.checklistTemplates[type])) state.checklistTemplates[type] = JSON.parse(JSON.stringify(checklistTemplateSeed[type] || [])); });
  state.maker.rooms.forEach((room, index) => {
    if (!room.roomStatus) room.roomStatus = defaultRoomStatus(room.floor || 1, (index % Math.max(1, state.maker.roomsPerFloor || 10)) + 1);
    if (!room.cleaningType) room.cleaningType = cleaningTypeForStatus(room.roomStatus);
  });
  state.tasks.forEach(task => {
    ensureChecklistItems(task);
    let room = findInventoryRoom(task);
    if (!room && task.roomNumber) {
      room = { id: `task-room-${task.floor}-${task.roomNumber}`, number: String(task.roomNumber), floor: Number(task.floor) || 1, priority: task.priority || 'Medium', roomStatus: task.type === 'Stayover cleaning' ? 'Occupied' : task.type === 'Checkout cleaning' ? 'Checkout expected' : 'Dirty', cleaningType: task.type || 'Daily room cleaning', assignee: task.assignee || '', manual: true };
      state.maker.rooms.push(room);
    }
    if (!room) return;
    if (task.status === 'In Progress') room.roomStatus = 'Cleaning';
    else if (task.status === 'Review') room.roomStatus = 'Inspection';
    else if (task.status === 'Completed') room.roomStatus = task.type === 'Stayover cleaning' ? 'Occupied' : 'Clean / Ready';
    else if (task.status === 'Re-clean') room.roomStatus = 'Dirty';
  });
}

// --- Cross-tab / reload persistence -----------------------------------
// This is still a frontend-only demo (no real backend), but housekeeper and
// supervisor are commonly opened as two tabs in the same browser during a
// demo. Without this, each tab keeps its own in-memory state and nothing
// submitted on one side (e.g. a housekeeper's issue photo) is ever visible
// on the other. We mirror the shared, growable parts of state to
// localStorage and listen for changes so every open tab stays in sync.
const STORAGE_KEY = 'houseops-demo-state-v1';

function serializeState() {
  return {
    tasks: state.tasks,
    issues: state.issues,
    lastSentIssueId: state.lastSentIssueId,
    maker: { floors: state.maker.floors, roomsPerFloor: state.maker.roomsPerFloor, rooms: state.maker.rooms, cleaners: state.maker.cleaners, optimized: state.maker.optimized, publishedAt: state.maker.publishedAt },
    checklistTemplates: state.checklistTemplates,
    training: state.training
  };
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serializeState()));
  } catch (err) {
    console.warn('HouseOps demo: could not save local data', err);
  }
}

function hydrateState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (Array.isArray(saved.tasks)) state.tasks = saved.tasks;
    if (Array.isArray(saved.issues)) state.issues = saved.issues;
    if (saved.lastSentIssueId !== undefined) state.lastSentIssueId = saved.lastSentIssueId;
    if (saved.maker) Object.assign(state.maker, saved.maker);
    if (saved.checklistTemplates) state.checklistTemplates = saved.checklistTemplates;
    if (saved.training) state.training = saved.training;
    normalizeOperationalState();
  } catch (err) {
    console.warn('HouseOps demo: could not load local data', err);
  }
}

hydrateState();

const adminNav = [
  ['dashboard', 'chart', 'dashboard'],
  ['time', 'clock', 'time'],
  ['employees', 'users', 'employees']
];
const supervisorNav = [
  ['overview', 'grid', 'overview'],
  ['inventory', 'home', 'hotelInventory'],
  ['maker', 'wand', 'taskMaker'],
  ['checklists', 'check-circle', 'checklistTemplates'],
  ['reviews', 'image', 'reviews'],
  ['tasks', 'grid', 'tasks'],
  ['issues', 'camera', 'issues']
];

const weekly = {
  days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  rooms: [61, 66, 64, 69, 70, 58, 52],
  minutes: [29, 28, 27, 26, 27, 25, 26],
  staff: [
    { name: 'Nino Gelashvili', in: '07:57', out: '16:05', worked: '40h 12m', roomTime: '28m', rooms: 48, quality: 96, recleans: 1 },
    { name: 'Ana Beridze', in: '08:02', out: '16:01', worked: '39h 48m', roomTime: '26m', rooms: 51, quality: 97, recleans: 0 },
    { name: 'Mari Kapanadze', in: '07:54', out: '16:08', worked: '40h 31m', roomTime: '30m', rooms: 44, quality: 93, recleans: 2 },
    { name: 'Lika Japaridze', in: '08:04', out: '16:00', worked: '39h 35m', roomTime: '27m', rooms: 47, quality: 95, recleans: 1 }
  ]
};

function localizePriority(priority) {
  return ({ Urgent: t('urgent'), High: t('high'), Medium: t('medium'), Low: t('low') })[priority] || priority;
}
function localizeStatus(status) {
  return ({ Pending: t('pending'), 'In Progress': t('inProgress'), Review: t('review'), 'Re-clean': t('reclean'), Completed: t('completed') })[status] || status;
}
function localizeRoomStatus(status) {
  return ({ 'Occupied': t('occupied'), 'Checkout expected': t('checkoutExpected'), 'Dirty': t('dirty'), 'Cleaning': t('cleaning'), 'Inspection': t('inspection'), 'Clean / Ready': t('cleanReady'), 'DND': t('dnd'), 'Out of Order': t('outOfOrder') })[status] || status;
}
function roomStatusClass(status) { return `room-status-${String(status).toLowerCase().replace(/[^a-z0-9]+/g, '-')}`; }
function localizeTaskType(type) {
  return ({ 'Checkout cleaning': t('checkoutCleaning'), 'Stayover cleaning': t('stayoverCleaning'), 'Deep cleaning': t('deepCleaning'), 'Daily room cleaning': t('dailyCleaning') })[type] || type;
}
function priorityClass(value) { return `priority-${value.toLowerCase()}`; }
function statusClass(value) { return `status-${value.toLowerCase().replace(/\s+/g, '-')}`; }
function formatTime(seconds) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}
function toast(message) {
  const el = $('#toast');
  el.textContent = message;
  el.classList.remove('hidden');
  clearTimeout(el._timer);
  el._timer = setTimeout(() => el.classList.add('hidden'), 2600);
}
function openModal(html, wide = false) {
  const root = $('#modalRoot');

  // Clean up any previous modal keyboard listener before rendering a new modal.
  if (root._escapeHandler) {
    document.removeEventListener('keydown', root._escapeHandler);
    root._escapeHandler = null;
  }

  root.innerHTML = `<div class="modal-backdrop"><div class="modal ${wide ? 'modal-wide' : ''}">${html}</div></div>`;
  renderIcons(root);

  // Every modal gets working close controls automatically, including modals
  // opened later from photo thumbnails. This avoids stale event handlers.
  $$('.modal-close', root).forEach(button => {
    button.onclick = closeModal;
  });

  // Clicking the dimmed area outside the dialog closes it.
  const backdrop = $('.modal-backdrop', root);
  if (backdrop) {
    backdrop.onclick = event => {
      if (event.target === backdrop) closeModal();
    };
  }

  // Escape is an additional safe way to close the photo/dialog preview.
  root._escapeHandler = event => {
    if (event.key === 'Escape' && root.innerHTML) closeModal();
  };
  document.addEventListener('keydown', root._escapeHandler);
}
function closeModal() {
  const root = $('#modalRoot');
  if (root._escapeHandler) {
    document.removeEventListener('keydown', root._escapeHandler);
    root._escapeHandler = null;
  }
  root.innerHTML = '';
}
function currentLocale() { return state.lang === 'ka' ? 'ka-GE' : state.lang === 'ru' ? 'ru-RU' : 'en-US'; }
function todayLabel() { return new Intl.DateTimeFormat(currentLocale(), { weekday: 'long', month: 'long', day: 'numeric' }).format(new Date()); }
function metric(label, value, note = '') {
  return `<article class="metric-card"><span>${label}</span><strong>${value}</strong><small>${note}</small></article>`;
}

function buildHotelRooms(floors = state.maker.floors, roomsPerFloor = state.maker.roomsPerFloor) {
  const rooms = [];
  for (let floor = 1; floor <= floors; floor++) {
    for (let i = 1; i <= roomsPerFloor; i++) {
      const roomStatus = defaultRoomStatus(floor, i);
      rooms.push({
        id: `${floor}-${i}`,
        number: `${floor}${String(i).padStart(2, '0')}`,
        floor,
        priority: roomStatus === 'Checkout expected' ? 'High' : roomStatus === 'Dirty' ? 'Medium' : 'Low',
        roomStatus,
        cleaningType: cleaningTypeForStatus(roomStatus),
        assignee: '',
        manual: false
      });
    }
  }
  return rooms;
}

function generateRooms(floors = state.maker.floors, roomsPerFloor = state.maker.roomsPerFloor) {
  state.maker.rooms = buildHotelRooms(floors, roomsPerFloor);
  state.maker.optimized = false;
}

function addAllHotelRooms() {
  const floors = Math.max(1, Number($('#makerFloors')?.value) || state.maker.floors || 1);
  const roomsPerFloor = Math.max(1, Number($('#makerRoomsPerFloor')?.value) || state.maker.roomsPerFloor || 1);
  state.maker.floors = floors;
  state.maker.roomsPerFloor = roomsPerFloor;

  const existing = new Set(state.maker.rooms.map(room => `${room.floor}:${room.number}`));
  const missing = buildHotelRooms(floors, roomsPerFloor).filter(room => !existing.has(`${room.floor}:${room.number}`));
  if (!missing.length) {
    toast(t('hotelInventoryComplete'));
    return;
  }

  state.maker.rooms.push(...missing);
  state.maker.rooms.sort((a, b) => a.floor - b.floor || String(a.number).localeCompare(String(b.number), undefined, { numeric: true }));
  state.maker.optimized = false;
  toast(`${missing.length} ${t('allRoomsAdded')}.`);
  showDesktopView('maker');
}
if (!state.maker.rooms.length) generateRooms();
normalizeOperationalState();
persist();

function applyTranslations() {
  document.documentElement.lang = state.lang;
  $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  $$('[data-mobile-label]').forEach(el => { el.textContent = t(el.dataset.mobileLabel); });
  $$('.language-switcher button').forEach(button => button.classList.toggle('active', button.dataset.lang === state.lang));
  $('#shiftLabel').textContent = t('morningShift');
  $('#helloLabel').textContent = t('hello');
  renderIcons();
}

function logout() {
  stopTimer();
  stopVoiceReader(false);
  document.body.classList.remove('desktop-mode', 'mobile-mode');
  $('#desktopApp').classList.add('hidden');
  $('#mobileApp').classList.add('hidden');
  $('#aiAssistantBtn').classList.add('hidden');
  $('#aiPanel').classList.add('hidden');
  $('#loginView').classList.remove('hidden');
  applyTranslations();
}

function showDesktop(role) {
  state.desktopRole = role;
  document.body.classList.add('desktop-mode');
  document.body.classList.remove('mobile-mode');
  state.previewFromDesktop = false;
  $('#loginView').classList.add('hidden');
  $('#mobileApp').classList.add('hidden');
  $('#desktopApp').classList.remove('hidden');
  $('#aiAssistantBtn').classList.remove('hidden');
  $('#desktopRoleLabel').textContent = role === 'admin' ? t('adminConsole') : t('supervisorConsole');
  $('#profileRole').textContent = role === 'admin' ? t('administrator') : t('supervisor');
  $('#openMobilePreview').classList.toggle('hidden', role === 'admin');
  $('#alertsButton').classList.toggle('hidden', role === 'admin');
  renderNav();
  showDesktopView(role === 'admin' ? 'dashboard' : 'overview');
}

function renderNav() {
  const navItems = state.desktopRole === 'admin' ? adminNav : supervisorNav;
  $('#desktopNav').innerHTML = navItems.map(([view, icon, label], index) => {
    const issueCount = view === 'issues' ? state.issues.filter(issue => issue.status === 'Open').length : 0;
    return `<button class="nav-item ${index === 0 ? 'active' : ''}" data-view="${view}">
      <span data-icon="${icon}"></span><span>${t(label)}</span>${issueCount ? `<span class="nav-count">${issueCount}</span>` : ''}
    </button>`;
  }).join('');
  $$('.nav-item', $('#desktopNav')).forEach(button => {
    button.onclick = () => {
      $$('.nav-item', $('#desktopNav')).forEach(x => x.classList.remove('active'));
      button.classList.add('active');
      showDesktopView(button.dataset.view);
    };
  });
  renderIcons($('#desktopNav'));
}

function pageTitleFor(view) {
  const map = { dashboard: 'dashboard', time: 'time', employees: 'employees', overview: 'overview', inventory: 'hotelInventory', maker: 'taskMaker', checklists: 'checklistTemplates', reviews: 'reviews', tasks: 'tasks', issues: 'issues' };
  return t(map[view] || 'dashboard');
}

function showDesktopView(view) {
  state.currentDesktopView = view;
  $('#pageTitle').textContent = pageTitleFor(view);
  $('#todayLabel').textContent = todayLabel();
  const quickCreate = $('#createTaskButton');
  quickCreate.textContent = t('quickCreateTask');
  quickCreate.classList.toggle('hidden', state.desktopRole !== 'supervisor');
  $('#desktopContent').innerHTML = state.desktopRole === 'admin' ? renderAdmin(view) : renderSupervisor(view);
  bindDesktop(view);
  renderIcons($('#desktopContent'));
}

function renderAdmin(view) {
  if (view === 'time') return adminTimeView();
  if (view === 'employees') return adminEmployeesView();
  return adminDashboard();
}

function simpleBarChart(values, labels, suffix = '') {
  const max = Math.max(...values, 1);
  return `<div class="mini-chart">${values.map((value, i) => `
    <div class="mini-bar-col">
      <div class="mini-bar-value">${value}${suffix}</div>
      <div class="mini-bar-track"><div class="mini-bar" style="height:${Math.max(12, value / max * 100)}%"></div></div>
      <small>${labels[i]}</small>
    </div>`).join('')}</div>`;
}

function adminDashboard() {
  const totalRooms = weekly.rooms.reduce((a, b) => a + b, 0);
  return `<section class="content">
    <div class="section-heading">
      <div><span class="eyebrow dark">ANALYTICS</span><h1>${t('weeklyPerformance')}</h1><p class="muted">${t('weeklyPerformanceText')}</p></div>
      <span class="health-pill">${t('adminDesc')}</span>
    </div>
    <div class="metric-grid">
      ${metric(t('checkedIn'), '7 / 8', 'Today')}
      ${metric(t('avgRoomTime'), '27m', '−2m vs last week')}
      ${metric(t('roomsDone'), totalRooms, 'This week')}
      ${metric(t('quality'), '95.3%', 'First-pass')}
    </div>
    <div class="grid-2 analytics-grid">
      <article class="panel"><div class="panel-head"><div><h3>${t('roomsPerDay')}</h3><p>Mon–Sun</p></div></div>${simpleBarChart(weekly.rooms, weekly.days)}</article>
      <article class="panel"><div class="panel-head"><div><h3>${t('avgMinutesByDay')}</h3><p>Lower is better</p></div></div>${simpleBarChart(weekly.minutes, weekly.days, 'm')}</article>
    </div>
    <article class="panel"><div class="panel-head"><div><h3>${t('employeeWeek')}</h3><p>${t('weeklyPerformanceText')}</p></div></div>${staffTable()}</article>
  </section>`;
}

function staffTable() {
  return `<div class="table-wrap"><table><thead><tr>
    <th>${t('employee')}</th><th>${t('checkIn')}</th><th>${t('checkOut')}</th><th>${t('worked')}</th><th>${t('roomsDone')}</th><th>${t('roomTime')}</th><th>${t('quality')}</th><th>${t('recleans')}</th>
  </tr></thead><tbody>${weekly.staff.map(row => `<tr>
    <td><b>${row.name}</b></td><td>${row.in}</td><td>${row.out}</td><td>${row.worked}</td><td>${row.rooms}</td><td>${row.roomTime}</td><td>${row.quality}%</td><td>${row.recleans}</td>
  </tr>`).join('')}</tbody></table></div>`;
}

function adminTimeView() {
  return `<section class="content"><div class="section-heading"><div><h1>${t('time')}</h1><p class="muted">${t('weeklyPerformanceText')}</p></div></div>
    <article class="panel">${staffTable()}</article>
    <article class="panel"><div class="panel-head"><div><h3>${t('avgMinutesByDay')}</h3><p>Weekly trend</p></div></div>${simpleBarChart(weekly.minutes, weekly.days, 'm')}</article>
  </section>`;
}

function adminEmployeesView() {
  return `<section class="content"><div class="section-heading"><div><h1>${t('employees')}</h1><p class="muted">${t('weeklyPerformanceText')}</p></div></div>
    <div class="employee-grid">${weekly.staff.map(row => `<article class="employee-card">
      <span class="avatar">${row.name.split(' ').map(x => x[0]).join('')}</span><h3>${row.name}</h3><p>${t('housekeeper')}</p>
      <div class="employee-stats"><div><span>${t('roomsDone')}</span><b>${row.rooms}</b></div><div><span>${t('roomTime')}</span><b>${row.roomTime}</b></div><div><span>${t('quality')}</span><b>${row.quality}%</b></div><div><span>${t('recleans')}</span><b>${row.recleans}</b></div></div>
    </article>`).join('')}</div>
  </section>`;
}

function renderSupervisor(view) {
  if (view === 'inventory') return hotelInventoryView();
  if (view === 'maker') return taskMakerView();
  if (view === 'checklists') return checklistTemplatesView();
  if (view === 'reviews') return reviewsView();
  if (view === 'tasks') return tasksView();
  if (view === 'issues') return issuesView();
  return supervisorOverview();
}

function supervisorOverview() {
  const reviews = state.tasks.filter(x => x.status === 'Review').length;
  const recleans = state.tasks.filter(x => x.status === 'Re-clean').length;
  const unassigned = state.tasks.filter(x => !x.assignee && x.status !== 'Completed').length;
  const published = state.tasks.filter(x => x.source === 'maker').length;
  return `<section class="content">
    <div class="section-heading"><div><span class="eyebrow dark">SUPERVISOR</span><h1>${t('supervisorOverview')}</h1><p class="muted">${t('supervisorOverviewText')}</p></div></div>
    <div class="metric-grid">${metric(t('pendingReview'), reviews, 'QC queue')}${metric(t('reclean'), recleans, 'Returned')}${metric(t('unassigned'), unassigned, 'Open')}${metric(t('publishedTasks'), published, 'From Task Maker')}</div>
    <div class="grid-2">
      <article class="panel"><div class="panel-head"><div><h3>${t('assignmentPlan')}</h3><p>${state.maker.rooms.length} ${t('roomList')} · ${state.maker.cleaners.length} ${t('activeCleaners')}</p></div><button class="btn primary" data-jump="maker"><span data-icon="wand"></span>${t('taskMaker')}</button></div>
        <div class="floor-summary">${floorSummary()}</div>
      </article>
      <article class="panel"><div class="panel-head"><div><h3>${t('reviewQueue')}</h3><p>${reviews} ${t('pendingReview')}</p></div><button class="btn ghost" data-jump="reviews">${t('reviews')}</button></div>
        ${state.tasks.filter(x => x.status === 'Review').slice(0, 3).map(x => `<div class="queue-mini"><div><b>${x.location}</b><small>${x.assignee}</small></div><span class="pill status-review">${t('review')}</span></div>`).join('') || `<p class="muted">${t('noReviews')}</p>`}
      </article>
    </div>
  </section>`;
}

function floorSummary() {
  const grouped = new Map();
  state.maker.rooms.forEach(room => {
    const key = room.floor;
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(room);
  });
  return [...grouped.entries()].map(([floor, rooms]) => {
    const people = [...new Set(rooms.map(x => x.assignee).filter(Boolean))];
    return `<div class="floor-chip"><b>F${floor}</b><span>${rooms.length} ${t('roomList')}</span><small>${people.join(', ') || t('unassigned')}</small></div>`;
  }).join('');
}

function hotelInventoryView() {
  const floors = [...new Set(state.maker.rooms.map(room => room.floor))].sort((a, b) => a - b);
  if (!floors.includes(state.inventoryFloor)) state.inventoryFloor = floors[0] || 1;
  const visible = state.maker.rooms.filter(room => room.floor === state.inventoryFloor);
  const counts = Object.fromEntries(ROOM_STATUSES.map(status => [status, state.maker.rooms.filter(room => room.roomStatus === status).length]));
  return `<section class="content">
    <div class="section-heading"><div><span class="eyebrow dark">ROOM OPERATIONS</span><h1>${t('hotelInventory')}</h1><p class="muted">${t('inventoryText')}</p></div><button class="btn primary" data-jump="maker"><span data-icon="wand"></span>${t('taskMaker')}</button></div>
    <div class="inventory-status-strip">${ROOM_STATUSES.map(status => `<div class="inventory-status-metric ${roomStatusClass(status)}"><b>${counts[status] || 0}</b><span>${localizeRoomStatus(status)}</span></div>`).join('')}</div>
    <div class="floor-tabs">${floors.map(floor => `<button class="floor-tab ${floor === state.inventoryFloor ? 'active' : ''}" data-inventory-floor="${floor}">F${floor}<span>${state.maker.rooms.filter(r => r.floor === floor).length}</span></button>`).join('')}</div>
    <div class="inventory-room-grid">${visible.map(room => `<article class="inventory-room-card ${roomStatusClass(room.roomStatus)}">
      <div class="inventory-room-head"><div><small>${t('room')}</small><h3>${room.number}</h3></div><span class="room-task-flag ${roomNeedsCleaning(room) ? 'needs' : ''}">${roomNeedsCleaning(room) ? t('needsTask') : t('noTask')}</span></div>
      <label class="compact-field">${t('roomStatus')}<select class="inventory-room-status" data-room-id="${room.id}">${ROOM_STATUSES.map(status => `<option value="${status}" ${room.roomStatus === status ? 'selected' : ''}>${localizeRoomStatus(status)}</option>`).join('')}</select></label>
      <label class="compact-field">${t('cleaningType')}<select class="inventory-cleaning-type" data-room-id="${room.id}">${TASK_TYPES.map(type => `<option value="${type}" ${room.cleaningType === type ? 'selected' : ''}>${localizeTaskType(type)}</option>`).join('')}</select></label>
    </article>`).join('')}</div>
  </section>`;
}

function taskMakerView() {
  const plannedRooms = state.maker.rooms.filter(roomNeedsCleaning);
  return `<section class="content">
    <div class="section-heading"><div><span class="eyebrow dark">SMART DISPATCH</span><h1>${t('buildPlan')}</h1><p class="muted">${t('buildPlanText')}</p></div><div class="heading-actions"><button class="btn ghost" data-jump="inventory">${t('hotelInventory')}</button><span class="health-pill">${state.maker.optimized ? t('optimized') : t('draft')}</span></div></div>
    <div class="maker-layout">
      <article class="panel maker-panel">
        <div class="panel-head"><div><h3>1. ${t('buildingSetup')}</h3><p>${state.maker.rooms.length} ${t('roomList')} · ${plannedRooms.length} ${t('needsTask')}</p></div></div>
        <div class="inline-form">
          <label>${t('floors')}<input id="makerFloors" type="number" min="1" max="30" value="${state.maker.floors}"></label>
          <label>${t('roomsPerFloor')}<input id="makerRoomsPerFloor" type="number" min="1" max="100" value="${state.maker.roomsPerFloor}"></label>
          <button id="generateRoomsBtn" class="btn secondary">${t('generateRooms')}</button>
        </div>
        <div class="hotel-room-actions">
          <button id="addAllHotelRoomsBtn" class="btn primary hotel-all-rooms"><span data-icon="grid"></span>${t('addAllHotelRooms')}</button>
          <button id="clearAllRoomsBtn" class="btn danger hotel-clear-rooms" ${state.maker.rooms.length ? '' : 'disabled'}><span data-icon="trash"></span>${t('clearAllRooms')}</button>
        </div>
        <form id="addRoomForm" class="inline-form compact">
          <label>${t('room')}<input id="customRoomNumber" placeholder="701" required></label>
          <label>${t('floor')}<input id="customRoomFloor" type="number" min="1" value="7" required></label>
          <button class="btn ghost">+ ${t('addRoom')}</button>
        </form>
        <div class="maker-scroll">${state.maker.rooms.map(room => `<div class="maker-row"><span class="room-badge">${room.number}</span><span>F${room.floor}</span><span class="room-status-dot ${roomStatusClass(room.roomStatus)}">${localizeRoomStatus(room.roomStatus)}</span><button class="tiny-remove" data-remove-room="${room.id}" title="${t('remove')}">×</button></div>`).join('')}</div>
      </article>

      <article class="panel maker-panel">
        <div class="panel-head"><div><h3>2. ${t('housekeepingTeam')}</h3><p>${state.maker.cleaners.length} ${t('activeCleaners')}</p></div></div>
        <form id="addCleanerForm" class="inline-form compact">
          <label>${t('cleanerName')}<input id="cleanerName" placeholder="Nino" required></label>
          <label>${t('homeFloor')}<input id="cleanerFloor" type="number" min="1" value="1"></label>
          <button class="btn ghost">+ ${t('addCleaner')}</button>
        </form>
        <div class="cleaner-list">${state.maker.cleaners.map(cleaner => `<div class="cleaner-row"><span class="avatar">${cleaner.name.slice(0, 2).toUpperCase()}</span><div><b>${cleaner.name}</b><small>F${cleaner.homeFloor || '—'}</small></div><button class="tiny-remove" data-remove-cleaner="${cleaner.id}" title="${t('remove')}">×</button></div>`).join('')}</div>
      </article>
    </div>

    <article class="panel">
      <div class="panel-head"><div><h3>3. ${t('assignmentPlan')}</h3><p>${t('optimizationNote')}</p></div><div class="maker-actions"><button id="optimizeMakerBtn" class="btn secondary"><span data-icon="wand"></span>${t('optimize')}</button><button id="publishMakerBtn" class="btn primary" ${state.maker.optimized ? '' : 'disabled'}>${t('publish')}</button></div></div>
      <div class="safe-publish-banner"><span>✓</span><div><b>${t('safePublishNote')}</b><small>${plannedRooms.length} ${t('needsTask')}</small></div></div>
      <div class="dispatch-table-wrap maker-assignment-table"><table><thead><tr><th>${t('room')}</th><th>${t('floor')}</th><th>${t('roomStatus')}</th><th>${t('cleaningType')}</th><th>${t('priority')}</th><th>${t('assigned')}</th><th>${t('status')}</th></tr></thead><tbody>
        ${plannedRooms.length ? plannedRooms.map(room => `<tr><td><b>${room.number}</b></td><td>F${room.floor}</td><td><span class="room-status-dot ${roomStatusClass(room.roomStatus)}">${localizeRoomStatus(room.roomStatus)}</span></td><td><select class="maker-cleaning-type" data-room-id="${room.id}">${TASK_TYPES.map(type => `<option value="${type}" ${room.cleaningType === type ? 'selected' : ''}>${localizeTaskType(type)}</option>`).join('')}</select></td><td><span class="pill ${priorityClass(room.priority)}">${localizePriority(room.priority)}</span></td><td>
          <select class="maker-assignee" data-room-id="${room.id}"><option value="">${t('unassigned')}</option>${state.maker.cleaners.map(cleaner => `<option value="${cleaner.name}" ${room.assignee === cleaner.name ? 'selected' : ''}>${cleaner.name}</option>`).join('')}</select>
        </td><td><span class="maker-status ${room.manual ? 'manual' : ''}">${room.manual ? t('manualOverride') : room.assignee ? t('optimized') : t('draft')}</span></td></tr>`).join('') : `<tr><td colspan="7"><div class="empty-state">${t('hotelInventory')} → ${t('roomStatus')}: ${t('checkoutExpected')} / ${t('dirty')}</div></td></tr>`}
      </tbody></table></div>
    </article>
  </section>`;
}

function confirmClearAllRooms() {
  if (!state.maker.rooms.length) return;
  openModal(`<div class="modal-head"><div><span class="eyebrow dark">TASK MAKER</span><h2>${t('clearAllRoomsTitle')}</h2></div><button class="modal-close">×</button></div>
    <p class="modal-copy">${state.maker.rooms.length} ${t('roomList')}</p>
    <p class="muted">${t('clearAllRoomsText')}</p>
    <div class="modal-actions"><button type="button" class="btn ghost modal-close">${t('cancel')}</button><button id="confirmClearAllRooms" class="btn danger">${t('clearAllRooms')}</button></div>`);
  $$('.modal-close').forEach(button => button.onclick = closeModal);
  $('#confirmClearAllRooms').onclick = clearAllRooms;
}

function clearAllRooms() {
  state.maker.rooms = [];
  state.maker.optimized = false;
  persist();
  closeModal();
  toast(t('roomsCleared'));
  showDesktopView('maker');
}

function optimizeMaker() {
  const rooms = state.maker.rooms.filter(roomNeedsCleaning);
  const cleaners = state.maker.cleaners;
  if (!rooms.length || !cleaners.length) return;

  const floors = [...new Set(rooms.map(r => r.floor))].sort((a, b) => a - b);
  const floorCleaners = new Map(floors.map(floor => [floor, []]));
  cleaners.forEach((cleaner, index) => {
    let targetFloor;
    if (cleaners.length >= floors.length) {
      if (index < floors.length) targetFloor = floors[index];
      else targetFloor = floors.reduce((best, floor) => floorCleaners.get(floor).length < floorCleaners.get(best).length ? floor : best, floors[0]);
    } else {
      targetFloor = floors[Math.min(floors.length - 1, Math.floor(index * floors.length / cleaners.length))];
    }
    floorCleaners.get(targetFloor).push(cleaner);
  });
  floors.forEach(floor => {
    if (floorCleaners.get(floor).length) return;
    const nearestFloor = floors.filter(f => floorCleaners.get(f).length).sort((a, b) => Math.abs(a - floor) - Math.abs(b - floor))[0];
    floorCleaners.set(floor, floorCleaners.get(nearestFloor));
  });

  const loadMinutes = Object.fromEntries(cleaners.map(c => [c.name, 0]));
  const expectedByType = { 'Checkout cleaning': 35, 'Stayover cleaning': 20, 'Deep cleaning': 55, 'Daily room cleaning': 28 };
  rooms.sort((a, b) => a.floor - b.floor || String(a.number).localeCompare(String(b.number), undefined, { numeric: true })).forEach(room => {
    const candidates = floorCleaners.get(room.floor) || cleaners;
    const best = [...candidates].sort((a, b) => loadMinutes[a.name] - loadMinutes[b.name] || Math.abs((a.homeFloor || room.floor) - room.floor) - Math.abs((b.homeFloor || room.floor) - room.floor))[0];
    room.assignee = best.name;
    room.manual = false;
    loadMinutes[best.name] += expectedByType[room.cleaningType] || 28;
  });
  state.maker.optimized = rooms.every(r => r.assignee);
  toast(t('optimizeDone'));
  showDesktopView('maker');
}

function buildPublishDiff() {
  const planned = state.maker.rooms.filter(room => roomNeedsCleaning(room) && room.assignee);
  const existing = state.tasks.filter(task => task.source === 'maker');
  const existingByKey = new Map(existing.map(task => [taskRoomKey(task), task]));
  const plannedKeys = new Set(planned.map(taskRoomKey));
  const diff = { newTasks: [], reassigned: [], unchanged: [], removed: [], protected: [] };

  planned.forEach(room => {
    const task = existingByKey.get(taskRoomKey(room));
    if (!task) return diff.newTasks.push(room);
    if (task.status !== 'Pending') {
      diff.unchanged.push({ room, task });
      if (task.assignee !== room.assignee || task.type !== room.cleaningType) diff.protected.push({ room, task });
      return;
    }
    if (task.assignee !== room.assignee || task.type !== room.cleaningType || task.priority !== room.priority) diff.reassigned.push({ room, task });
    else diff.unchanged.push({ room, task });
  });

  existing.forEach(task => {
    if (plannedKeys.has(taskRoomKey(task))) return;
    if (task.status === 'Pending') diff.removed.push(task);
    else { diff.unchanged.push({ room: findInventoryRoom(task), task }); diff.protected.push({ room: findInventoryRoom(task), task }); }
  });
  return diff;
}

function publishMaker() {
  if (!state.maker.optimized) return;
  const diff = buildPublishDiff();
  const changed = diff.newTasks.length + diff.reassigned.length + diff.removed.length;
  openModal(`<div class="modal-head"><div><span class="eyebrow dark">SAFE PUBLISH</span><h2>${t('publishPreviewTitle')}</h2><p class="muted">${t('publishPreviewText')}</p></div><button class="modal-close">×</button></div>
    <div class="safe-publish-info">${t('safePublishNote')}</div>
    <div class="publish-diff-grid">
      <div class="publish-diff new"><b>+${diff.newTasks.length}</b><span>${t('newTasks')}</span></div>
      <div class="publish-diff reassign"><b>${diff.reassigned.length}</b><span>${t('reassigned')}</span></div>
      <div class="publish-diff unchanged"><b>${diff.unchanged.length}</b><span>${t('unchanged')}</span></div>
      <div class="publish-diff removed"><b>${diff.removed.length}</b><span>${t('removedTasks')}</span></div>
    </div>
    ${diff.protected.length ? `<div class="protected-note">🔒 ${diff.protected.length} ${t('protectedTasks')} · ${t('taskLocked')}</div>` : ''}
    <div class="publish-preview-list">${[
      ...diff.newTasks.map(room => `<div><span class="change-dot new">+</span><b>${room.number}</b><span>${localizeTaskType(room.cleaningType)} · ${room.assignee}</span></div>`),
      ...diff.reassigned.map(({ room, task }) => `<div><span class="change-dot reassign">↔</span><b>${room.number}</b><span>${task.assignee} → ${room.assignee}</span></div>`),
      ...diff.removed.map(task => `<div><span class="change-dot removed">−</span><b>${task.roomNumber}</b><span>${task.assignee}</span></div>`)
    ].slice(0, 10).join('') || `<p class="muted">${t('noPlanChanges')}</p>`}</div>
    <div class="modal-actions"><button class="btn ghost modal-close">${t('cancel')}</button><button id="confirmPublishUpdate" class="btn primary" ${changed ? '' : 'disabled'}>${t('confirmPublish')}</button></div>`, true);
  $('#confirmPublishUpdate')?.addEventListener('click', () => applyPublishDiff(diff));
}

function applyPublishDiff(diff) {
  const expectedByType = { 'Checkout cleaning': 35, 'Stayover cleaning': 20, 'Deep cleaning': 55, 'Daily room cleaning': 28 };
  const now = Date.now();
  diff.newTasks.forEach((room, index) => {
    state.tasks.push({
      id: now + index, roomNumber: room.number, location: `Room ${room.number}`, floor: room.floor,
      type: room.cleaningType || cleaningTypeForStatus(room.roomStatus), assignee: room.assignee, priority: room.priority,
      status: 'Pending', deadline: `${String(13 + (index % 4)).padStart(2, '0')}:30`, expected: expectedByType[room.cleaningType] || 28,
      elapsed: 0, checklistItems: cloneChecklistForTask(room.cleaningType), beforePhotos: [], afterPhotos: [], issuePhotos: [], source: 'maker'
    });
  });
  diff.reassigned.forEach(({ room, task }) => {
    task.assignee = room.assignee;
    task.type = room.cleaningType;
    task.priority = room.priority;
    task.expected = expectedByType[room.cleaningType] || task.expected || 28;
    if (!task.checklistItems?.some(item => item.checked)) task.checklistItems = cloneChecklistForTask(room.cleaningType);
  });
  const removedIds = new Set(diff.removed.map(task => task.id));
  state.tasks = state.tasks.filter(task => !removedIds.has(task.id));
  state.maker.publishedAt = new Date().toISOString();
  persist();
  closeModal();
  toast(t('planPublished'));
  showDesktopView('tasks');
}

function reviewsView() {
  const queue = state.tasks.filter(task => task.status === 'Review');
  return `<section class="content"><div class="section-heading"><div><h1>${t('reviewQueue')}</h1><p class="muted">${t('reviewQueueText')}</p></div></div>
    <div class="supervisor-queue">${queue.length ? queue.map(reviewCard).join('') : `<article class="panel"><p class="muted">${t('noReviews')}</p></article>`}</div>
  </section>`;
}

function reviewCard(task) {
  const ai = runDemoAiQuality(task);
  const aiLabel = ai.verdict === 'risk' ? t('flaggedIssue') : ai.verdict === 'clean' ? t('likelyClean') : t('needsAttention');
  const aiText = ai.score == null ? t('noPhoto') : `${aiLabel} · ${ai.score}%`;
  return `<article class="review-item qc-review-card">
    <div class="review-item-head"><div><span class="pill ${priorityClass(task.priority)}">${localizePriority(task.priority)}</span><h3>${task.location}</h3><p>${task.assignee} · ${Math.round(task.elapsed / 60)} min</p></div><span class="pill status-review">${t('review')}</span></div>
    <div class="qc-photo-grid">
      ${photoGroup(t('beforePhoto'), task.beforePhotos)}
      ${photoGroup(t('afterPhoto'), task.afterPhotos)}
      <div class="ai-quality-card ${ai.verdict === 'risk' ? 'risk' : ai.verdict === 'attention' ? 'attention' : ''}"><span>${t('aiPhotoCheck')}</span><strong>${aiText}</strong><small>${t('aiDemo')}</small></div>
    </div>
    <div class="task-actions"><button class="btn danger reject-task-btn" data-id="${task.id}">${t('returnReclean')}</button><button class="btn primary approve-task-btn" data-id="${task.id}">${t('approveRoom')}</button></div>
  </article>`;
}

function photoGroup(title, photos) {
  return `<div class="qc-photo-group"><div class="qc-photo-title"><b>${title}</b><span>${photos.length}</span></div><div class="qc-thumbs">${photos.length ? photos.map(p => photoThumb(p)).join('') : `<div class="photo-empty">${t('noPhoto')}</div>`}</div></div>`;
}

function photoThumb(p, removable = false, key = '', taskId = '') {
  return `<div class="photo-thumb has-image"><img src="${p.url}" alt="${p.name}" data-preview-photo="${p.id}">${removable ? `<button class="photo-remove" data-photo-id="${p.id}" data-photo-key="${key}" data-task-id="${taskId}" title="${t('deletePhoto')}">×</button>` : ''}</div>`;
}

function runDemoAiQuality(task) {
  if (!task.afterPhotos?.length) return { score: null, verdict: 'attention' };
  // Demo heuristic (not real computer vision): the score reflects the
  // evidence actually submitted for this task — checklist completion,
  // before/after photo thoroughness, and any issue reported on this same
  // room — rather than a fixed number keyed off the task id.
  const checklistItems = ensureChecklistItems(task);
  const checklistTotal = checklistItems.length;
  const checklistDone = checklistTotal ? checklistItems.filter(item => item.checked).length : 0;
  const checklistRatio = checklistTotal ? checklistDone / checklistTotal : 1;
  const hasBeforePhoto = (task.beforePhotos?.length || 0) > 0;
  const afterCount = task.afterPhotos.length;
  const pendingIssuePhotos = task.issuePhotos?.length || 0;
  const linkedOpenIssues = state.issues.filter(issue => issue.taskId === task.id && issue.status === 'Open').length;

  let score = 72;
  score += Math.round(checklistRatio * 18);
  score += hasBeforePhoto ? 3 : -4;
  score += Math.min(afterCount, 3) * 2;
  score -= pendingIssuePhotos * 6;
  score -= linkedOpenIssues * 10;
  score = Math.max(55, Math.min(99, score));

  let verdict = 'clean';
  if (linkedOpenIssues > 0) verdict = 'risk';
  else if (pendingIssuePhotos > 0 || checklistRatio < 1 || score < 88) verdict = 'attention';

  const quality = { score, verdict };
  task.aiQuality = quality;
  return quality;
}

function checklistTemplatesView() {
  return `<section class="content"><div class="section-heading"><div><span class="eyebrow dark">WORK STANDARDS</span><h1>${t('checklistTemplates')}</h1><p class="muted">${t('checklistTemplatesText')}</p></div></div>
    <div class="template-grid">${TASK_TYPES.map(type => {
      const items = state.checklistTemplates[type] || [];
      return `<article class="template-card"><div class="template-icon">✓</div><div class="template-copy"><h3>${localizeTaskType(type)}</h3><p>${items.length} ${t('items')} · ${items.filter(x => x.required !== false).length} ${t('requiredItem')}</p></div><button class="btn ghost edit-template-btn" data-type="${type}">${t('editTemplate')}</button></article>`;
    }).join('')}</div>
    <article class="panel"><div class="panel-head"><div><h3>${t('checklistTemplates')}</h3><p>${t('checklistTemplatesText')}</p></div></div><div class="template-preview-list">${TASK_TYPES.map(type => `<div class="template-preview"><b>${localizeTaskType(type)}</b>${(state.checklistTemplates[type] || []).slice(0, 5).map(item => `<span>✓ ${localizedLabel(item.label)}${item.required === false ? ` <em>${t('optionalItem')}</em>` : ''}</span>`).join('')}</div>`).join('')}</div></article>
  </section>`;
}

function checklistEditorHtml(items, prefix) {
  return items.map((item, index) => `<div class="checklist-editor-row" data-editor-index="${index}"><span class="drag-handle">⋮⋮</span><input class="editor-item-text" value="${String(localizedLabel(item.label)).replace(/&/g,'&amp;').replace(/\"/g,'&quot;')}"><label class="required-toggle"><input class="editor-item-required" type="checkbox" ${item.required !== false ? 'checked' : ''}> ${t('requiredItem')}</label><button type="button" class="tiny-remove editor-remove-item" data-index="${index}">×</button></div>`).join('');
}

function openChecklistTemplateEditor(type) {
  const draft = JSON.parse(JSON.stringify(state.checklistTemplates[type] || []));
  const renderEditor = () => {
    const root = $('#templateItemsEditor');
    if (!root) return;
    root.innerHTML = checklistEditorHtml(draft, 'template');
    $$('.editor-item-text', root).forEach((input, i) => input.oninput = () => {
      const current = draft[i].label && typeof draft[i].label === 'object' ? draft[i].label : labelSet('', '', '');
      current[state.lang] = input.value;
      if (!current.en) current.en = input.value;
      draft[i].label = current;
    });
    $$('.editor-item-required', root).forEach((input, i) => input.onchange = () => draft[i].required = input.checked);
    $$('.editor-remove-item', root).forEach(button => button.onclick = () => { draft.splice(Number(button.dataset.index), 1); renderEditor(); });
  };
  openModal(`<div class="modal-head"><div><span class="eyebrow dark">${t('checklistTemplates')}</span><h2>${localizeTaskType(type)}</h2></div><button class="modal-close">×</button></div><div id="templateItemsEditor" class="checklist-editor"></div><button id="addTemplateItem" class="btn secondary full">+ ${t('addItem')}</button><div class="modal-actions"><button class="btn ghost modal-close">${t('cancel')}</button><button id="saveChecklistTemplate" class="btn primary">${t('saveTemplate')}</button></div>`, true);
  renderEditor();
  $('#addTemplateItem').onclick = () => { draft.push({ id: `custom-${Date.now()}-${draft.length}`, label: labelSet(t('customTask'), t('customTask'), t('customTask')), required: true, custom: true }); renderEditor(); };
  $('#saveChecklistTemplate').onclick = () => {
    state.checklistTemplates[type] = draft.filter(item => localizedLabel(item.label).trim());
    persist(); closeModal(); toast(t('templateSaved')); showDesktopView('checklists');
  };
}

function openTaskChecklistEditor(taskId) {
  const task = state.tasks.find(x => x.id === taskId);
  if (!task) return;
  const draft = JSON.parse(JSON.stringify(ensureChecklistItems(task)));
  const renderEditor = () => {
    const root = $('#taskChecklistEditor');
    if (!root) return;
    root.innerHTML = checklistEditorHtml(draft, 'task');
    $$('.editor-item-text', root).forEach((input, i) => input.oninput = () => {
      const current = draft[i].label && typeof draft[i].label === 'object' ? draft[i].label : labelSet('', '', '');
      current[state.lang] = input.value; if (!current.en) current.en = input.value; draft[i].label = current;
    });
    $$('.editor-item-required', root).forEach((input, i) => input.onchange = () => draft[i].required = input.checked);
    $$('.editor-remove-item', root).forEach(button => button.onclick = () => { draft.splice(Number(button.dataset.index), 1); renderEditor(); });
  };
  openModal(`<div class="modal-head"><div><span class="eyebrow dark">${task.location}</span><h2>${t('editChecklist')}</h2><p class="muted">${localizeTaskType(task.type)}</p></div><button class="modal-close">×</button></div><div id="taskChecklistEditor" class="checklist-editor"></div><button id="addTaskChecklistItem" class="btn secondary full">+ ${t('addItem')}</button><div class="modal-actions"><button class="btn ghost modal-close">${t('cancel')}</button><button id="saveTaskChecklist" class="btn primary">${t('saveTemplate')}</button></div>`, true);
  renderEditor();
  $('#addTaskChecklistItem').onclick = () => { draft.push({ id: `task-custom-${Date.now()}-${draft.length}`, label: labelSet(t('customTask'), t('customTask'), t('customTask')), required: true, checked: false, custom: true }); renderEditor(); };
  $('#saveTaskChecklist').onclick = () => { task.checklistItems = draft.filter(item => localizedLabel(item.label).trim()); persist(); closeModal(); toast(t('checklistUpdated')); showDesktopView('tasks'); };
}

const TASK_KANBAN_COLUMNS = [
  { key: 'pending', titleStatus: 'Pending', statuses: ['Pending'] },
  { key: 'progress', titleStatus: 'In Progress', statuses: ['In Progress', 'Review'] },
  { key: 'reclean', titleStatus: 'Re-clean', statuses: ['Re-clean'] },
  { key: 'completed', titleStatus: 'Completed', statuses: ['Completed'] }
];

function compareTasksForBoard(a, b) {
  const priorityDiff = priorities.indexOf(a.priority) - priorities.indexOf(b.priority);
  if (priorityDiff !== 0) return priorityDiff;
  const floorDiff = Number(a.floor || 0) - Number(b.floor || 0);
  if (floorDiff !== 0) return floorDiff;
  return String(a.location || '').localeCompare(String(b.location || ''), undefined, { numeric: true });
}

function tasksView() {
  const columns = TASK_KANBAN_COLUMNS.map(column => ({
    ...column,
    tasks: state.tasks.filter(task => column.statuses.includes(task.status)).sort(compareTasksForBoard)
  }));

  return `<section class="content"><div class="section-heading"><div><h1>${t('allTasks')}</h1><p class="muted">${t('allTasksText')}</p></div></div>
    <div class="task-kanban-board">${columns.map(column => `
      <section class="kanban-column kanban-${column.key}">
        <div class="kanban-column-head">
          <div class="kanban-column-title">
            <span class="kanban-status-dot ${statusClass(column.titleStatus)}"></span>
            <h3>${localizeStatus(column.titleStatus)}</h3>
          </div>
          <span class="kanban-count">${column.tasks.length}</span>
        </div>
        <div class="kanban-card-list">${column.tasks.length ? column.tasks.map(taskCard).join('') : `<div class="kanban-empty">${t('noTasks')}</div>`}</div>
      </section>`).join('')}</div>
  </section>`;
}

function taskCard(task) {
  return `<article class="task-card ${priorityClass(task.priority)}">
    <div class="task-top"><span class="pill ${priorityClass(task.priority)}">${localizePriority(task.priority)}</span><span class="pill ${statusClass(task.status)}">${localizeStatus(task.status)}</span></div>
    <h3>${task.location}</h3><p>${task.type}</p><div class="task-location-meta">${t('floor')} ${task.floor}</div>
    <div class="task-meta"><span>${t('assigned')}<br><b>${task.assignee || t('unassigned')}</b></span><span>${t('deadline')}<br><b>${task.deadline}</b></span></div>
    <div class="task-card-actions"><button class="btn ghost task-detail-btn" data-id="${task.id}">${t('details')}</button><button class="btn danger delete-task-btn" data-id="${task.id}">${t('deleteTask')}</button></div>
  </article>`;
}

function issuesView() {
  return `<section class="content"><div class="section-heading"><div><h1>${t('issueCenter')}</h1><p class="muted">${t('issueCenterText')}</p></div></div>
    <div class="issues-grid">${state.issues.length ? state.issues.map(issue => `<article class="issue-review-card">
      <div class="task-top"><span class="pill status-pending">${issue.status}</span><small>${issue.time}</small></div><h3>${issue.location} · ${issue.type}</h3><p>${issue.text}</p><div class="issue-meta"><span>${t('reportedBy')}: <b>${issue.reportedBy}</b></span>${issue.floor ? `<span>${t('floor')}: <b>${issue.floor}</b></span>` : ''}</div>
      <div class="qc-thumbs issue-thumbs">${issue.photos?.length ? issue.photos.map(p => photoThumb(p)).join('') : `<div class="photo-empty">${t('noPhoto')}</div>`}</div>
      <div class="issue-card-actions"><button class="btn danger delete-issue-btn" data-id="${issue.id}">${t('deleteIssue')}</button></div>
    </article>`).join('') : `<article class="panel"><p class="muted">${t('noIssues')}</p></article>`}</div>
  </section>`;
}

function openQuickTaskModal() {
  if (state.desktopRole !== 'supervisor') return;
  const cleaners = state.maker.cleaners;
  openModal(`<div class="modal-head"><div><span class="eyebrow dark">SUPERVISOR</span><h2>${t('createTaskTitle')}</h2></div><button class="modal-close">×</button></div>
    <form id="quickTaskForm">
      <div class="form-grid">
        <label class="form-field">${t('room')}<input id="quickRoom" placeholder="512" required></label>
        <label class="form-field">${t('floor')}<input id="quickFloor" type="number" min="1" max="99" value="1" required></label>
        <label class="form-field">${t('taskType')}<select id="quickType"><option value="Checkout cleaning">${t('checkoutCleaning')}</option><option value="Stayover cleaning">${t('stayoverCleaning')}</option><option value="Deep cleaning">${t('deepCleaning')}</option><option value="Daily room cleaning">${t('dailyCleaning')}</option></select></label>
        <label class="form-field">${t('assignTo')}<select id="quickAssignee" required><option value="">${t('unassigned')}</option>${cleaners.map(c => `<option value="${c.name}">${c.name}</option>`).join('')}</select></label>
        <label class="form-field">${t('priority')}<select id="quickPriority"><option>Urgent</option><option>High</option><option selected>Medium</option><option>Low</option></select></label>
        <label class="form-field">${t('deadline')}<input id="quickDeadline" type="time" value="15:00" required></label>
        <label class="form-field">${t('expectedMinutes')}<input id="quickExpected" type="number" min="5" max="240" value="28" required></label>
      </div>
      <div class="modal-actions"><button type="button" class="btn ghost modal-close">${t('cancel')}</button><button class="btn primary" type="submit">${t('create')}</button></div>
    </form>`);
  $$('.modal-close').forEach(button => button.onclick = closeModal);
  $('#quickTaskForm').onsubmit = event => {
    event.preventDefault();
    const number = $('#quickRoom').value.trim();
    const floor = Number($('#quickFloor').value);
    const assignee = $('#quickAssignee').value;
    if (!number || !floor || !assignee) return;
    const task = {
      id: Date.now(), roomNumber: number, location: `Room ${number}`, floor,
      type: $('#quickType').value, assignee, priority: $('#quickPriority').value,
      status: 'Pending', deadline: $('#quickDeadline').value, expected: Number($('#quickExpected').value) || 28,
      elapsed: 0, checklistItems: cloneChecklistForTask($('#quickType').value), beforePhotos: [], afterPhotos: [], issuePhotos: [], source: 'quick'
    };
    state.tasks.push(task);
    if (!state.maker.rooms.some(room => taskRoomKey(room) === taskRoomKey(task))) {
      state.maker.rooms.push({ id: `quick-room-${floor}-${number}-${Date.now()}`, number, floor, priority: task.priority, roomStatus: task.type === 'Stayover cleaning' ? 'Occupied' : task.type === 'Checkout cleaning' ? 'Checkout expected' : 'Dirty', cleaningType: task.type, assignee, manual: true });
    }
    closeModal();
    toast(t('taskCreated'));
    showDesktopView('tasks');
  };
}

function confirmDeleteTask(id) {
  const task = state.tasks.find(x => x.id === id);
  if (!task) return;
  openModal(`<div class="modal-head"><div><span class="eyebrow dark">${t('deleteTask')}</span><h2>${t('deleteTaskTitle')}</h2></div><button class="modal-close">×</button></div>
    <p class="modal-copy">${task.location} · ${task.assignee || t('unassigned')}</p><p class="muted">${t('deleteTaskText')}</p>
    <div class="modal-actions"><button class="btn ghost modal-close">${t('cancel')}</button><button id="confirmDeleteTask" class="btn danger">${t('confirmDelete')}</button></div>`);
  $$('.modal-close').forEach(button => button.onclick = closeModal);
  $('#confirmDeleteTask').onclick = () => deleteTask(id);
}

function deleteTask(id) {
  const task = state.tasks.find(x => x.id === id);
  if (!task) return;
  state.tasks = state.tasks.filter(x => x.id !== id);
  if (state.activeTaskId === id) state.activeTaskId = null;
  persist();
  closeModal();
  toast(t('taskDeleted'));
  showDesktopView('tasks');
}


function confirmDeleteIssue(id) {
  const issue = state.issues.find(x => x.id === id);
  if (!issue) return;
  openModal(`<div class="modal-head"><div><span class="eyebrow dark">${t('deleteIssue')}</span><h2>${t('deleteIssueTitle')}</h2></div><button class="modal-close">×</button></div>
    <p class="modal-copy">${issue.location} · ${issue.type}</p><p class="muted">${t('deleteIssueText')}</p>
    <div class="modal-actions"><button type="button" class="btn ghost modal-close">${t('cancel')}</button><button id="confirmDeleteIssue" class="btn danger">${t('confirmDelete')}</button></div>`);
  $$('.modal-close').forEach(button => button.onclick = closeModal);
  $('#confirmDeleteIssue').onclick = () => deleteIssue(id);
}

function deleteIssue(id) {
  const exists = state.issues.some(x => x.id === id);
  if (!exists) return;
  state.issues = state.issues.filter(x => x.id !== id);
  if (state.lastSentIssueId === id) state.lastSentIssueId = null;
  persist();
  closeModal();
  toast(t('issueDeleted'));
  showDesktopView('issues');
}

function showTaskInfo(id) {
  const task = state.tasks.find(x => x.id === id);
  if (!task) return;
  const items = ensureChecklistItems(task);
  const done = items.filter(item => item.checked).length;
  openModal(`<div class="modal-head"><div><span class="pill ${priorityClass(task.priority)}">${localizePriority(task.priority)}</span><h2>${task.location}</h2></div><button class="modal-close">×</button></div>
    <div class="detail-grid" style="margin-top:16px"><div><span>${t('assigned')}</span><b>${task.assignee || t('unassigned')}</b></div><div><span>${t('status')}</span><b>${localizeStatus(task.status)}</b></div><div><span>${t('roomStatus')}</span><b>${localizeRoomStatus(findInventoryRoom(task)?.roomStatus || 'Dirty')}</b></div><div><span>${t('deadline')}</span><b>${task.deadline}</b></div></div>
    <div class="task-checklist-summary"><div><b>${t('checklist')} · ${done}/${items.length}</b><small>${localizeTaskType(task.type)}</small></div><button id="editTaskChecklistBtn" class="btn secondary">${t('editChecklist')}</button></div>
    <div class="mini-checklist">${items.slice(0, 8).map(item => `<span class="${item.checked ? 'done' : ''}">${item.checked ? '✓' : '○'} ${localizedLabel(item.label)}${item.required === false ? ` <em>${t('optionalItem')}</em>` : ''}</span>`).join('')}</div>
    <div class="qc-photo-grid modal-photo-grid">${photoGroup(t('beforePhoto'), task.beforePhotos || [])}${photoGroup(t('afterPhoto'), task.afterPhotos || [])}</div>`, true);
  $('#editTaskChecklistBtn').onclick = () => openTaskChecklistEditor(task.id);
  bindPhotoPreview();
}

function approveTask(id) {
  const task = state.tasks.find(x => x.id === id);
  if (!task) return;
  task.status = 'Completed';
  setRoomStatusForTask(task, task.type === 'Stayover cleaning' ? 'Occupied' : 'Clean / Ready');
  task.reclean = false;
  task.recleanReason = '';
  toast(t('approved'));
  showDesktopView('reviews');
}

function rejectTask(id) {
  const task = state.tasks.find(x => x.id === id);
  if (!task) return;
  openModal(`<div class="modal-head"><h2>${t('returnReclean')} · ${task.location}</h2><button class="modal-close">×</button></div>
    <label class="form-field" style="margin-top:16px">${t('reason')}<textarea id="recleanReason" placeholder="Bathroom mirror / bed / floor…"></textarea></label>
    <div class="modal-actions"><button class="btn ghost modal-close">${t('cancel')}</button><button id="sendRecleanBtn" class="btn danger">${t('sendReclean')}</button></div>`);
  $$('.modal-close').forEach(button => button.onclick = closeModal);
  $('#sendRecleanBtn').onclick = () => {
    const reason = $('#recleanReason').value.trim();
    if (!reason) return toast(t('reasonRequired'));
    task.status = 'Re-clean';
    setRoomStatusForTask(task, 'Dirty');
    task.reclean = true;
    task.recleanReason = reason;
    task.afterPhotos = [];
    const items = ensureChecklistItems(task);
    items.unshift({ id: `reclean-${Date.now()}`, label: labelSet(`Re-clean: ${reason}`, `Re-clean: ${reason}`, `Re-clean: ${reason}`), required: true, checked: false, custom: true });
    task.aiQuality = null;
    closeModal();
    toast(t('recleanSent'));
    showDesktopView('reviews');
  };
}

function bindDesktop(view) {
  $$('[data-jump]').forEach(button => button.onclick = () => showDesktopView(button.dataset.jump));
  $$('.task-detail-btn').forEach(button => button.onclick = () => showTaskInfo(Number(button.dataset.id)));
  $$('.delete-task-btn').forEach(button => button.onclick = () => confirmDeleteTask(Number(button.dataset.id)));
  $$('.delete-issue-btn').forEach(button => button.onclick = () => confirmDeleteIssue(Number(button.dataset.id)));
  $$('.approve-task-btn').forEach(button => button.onclick = () => approveTask(Number(button.dataset.id)));
  $$('.reject-task-btn').forEach(button => button.onclick = () => rejectTask(Number(button.dataset.id)));
  bindPhotoPreview();

  if (view === 'inventory') {
    $$('[data-inventory-floor]').forEach(button => button.onclick = () => { state.inventoryFloor = Number(button.dataset.inventoryFloor); showDesktopView('inventory'); });
    $$('.inventory-room-status').forEach(select => select.onchange = () => {
      const room = state.maker.rooms.find(r => r.id === select.dataset.roomId); if (!room) return;
      room.roomStatus = select.value;
      if (select.value === 'Checkout expected') { room.cleaningType = 'Checkout cleaning'; room.priority = 'High'; }
      else if (select.value === 'Dirty') { if (room.cleaningType === 'Checkout cleaning') room.cleaningType = 'Daily room cleaning'; room.priority = room.priority === 'Low' ? 'Medium' : room.priority; }
      else if (select.value === 'Occupied') room.cleaningType = 'Stayover cleaning';
      room.assignee = roomNeedsCleaning(room) ? room.assignee : '';
      state.maker.optimized = false; persist(); showDesktopView('inventory');
    });
    $$('.inventory-cleaning-type').forEach(select => select.onchange = () => { const room = state.maker.rooms.find(r => r.id === select.dataset.roomId); if (room) { room.cleaningType = select.value; state.maker.optimized = false; persist(); } });
  }

  if (view === 'checklists') {
    $$('.edit-template-btn').forEach(button => button.onclick = () => openChecklistTemplateEditor(button.dataset.type));
  }

  if (view === 'maker') {
    $('#generateRoomsBtn').onclick = () => {
      state.maker.floors = Math.max(1, Number($('#makerFloors').value) || 1);
      state.maker.roomsPerFloor = Math.max(1, Number($('#makerRoomsPerFloor').value) || 1);
      generateRooms(); normalizeOperationalState(); toast(t('roomsGenerated')); showDesktopView('maker');
    };
    $('#addAllHotelRoomsBtn').onclick = addAllHotelRooms;
    $('#clearAllRoomsBtn').onclick = confirmClearAllRooms;
    $('#addRoomForm').onsubmit = event => {
      event.preventDefault();
      const number = $('#customRoomNumber').value.trim(); const floor = Number($('#customRoomFloor').value); if (!number) return;
      state.maker.rooms.push({ id: `${floor}-${number}-${Date.now()}`, number, floor, priority: 'Medium', roomStatus: 'Dirty', cleaningType: 'Daily room cleaning', assignee: '', manual: false });
      state.maker.optimized = false; showDesktopView('maker');
    };
    $('#addCleanerForm').onsubmit = event => {
      event.preventDefault(); const name = $('#cleanerName').value.trim(); if (!name) return toast(t('nameRequired'));
      state.maker.cleaners.push({ id: Date.now(), name, homeFloor: Number($('#cleanerFloor').value) || 1 }); state.maker.optimized = false; toast(t('cleanerAdded')); showDesktopView('maker');
    };
    $$('[data-remove-room]').forEach(button => button.onclick = () => { state.maker.rooms = state.maker.rooms.filter(room => room.id !== button.dataset.removeRoom); state.maker.optimized = false; showDesktopView('maker'); });
    $$('[data-remove-cleaner]').forEach(button => button.onclick = () => {
      const id = Number(button.dataset.removeCleaner); const removed = state.maker.cleaners.find(c => c.id === id); state.maker.cleaners = state.maker.cleaners.filter(c => c.id !== id);
      state.maker.rooms.forEach(room => { if (room.assignee === removed?.name) room.assignee = ''; }); state.maker.optimized = false; showDesktopView('maker');
    });
    $$('.maker-cleaning-type').forEach(select => select.onchange = () => { const room = state.maker.rooms.find(r => r.id === select.dataset.roomId); if (room) { room.cleaningType = select.value; room.manual = true; } });
    $$('.maker-assignee').forEach(select => select.onchange = () => {
      const room = state.maker.rooms.find(r => r.id === select.dataset.roomId); room.assignee = select.value; room.manual = true;
      state.maker.optimized = state.maker.rooms.filter(roomNeedsCleaning).every(r => r.assignee);
      const rowStatus = select.closest('tr').querySelector('.maker-status'); rowStatus.textContent = t('manualOverride'); rowStatus.classList.add('manual');
    });
    $('#optimizeMakerBtn').onclick = optimizeMaker;
    $('#publishMakerBtn').onclick = publishMaker;
  }
}

function showMobile(fromDesktop = false) {
  state.previewFromDesktop = fromDesktop;
  document.body.classList.add('mobile-mode');
  document.body.classList.remove('desktop-mode');
  $('#loginView').classList.add('hidden');
  $('#desktopApp').classList.add('hidden');
  $('#mobileApp').classList.remove('hidden');
  $('#aiAssistantBtn').classList.add('hidden');
  $('#mobileAdminBack').classList.toggle('hidden', !fromDesktop);
  state.mobileView = 'tasks';
  state.activeTaskId = null;
  $$('.mobile-nav-item').forEach(button => button.classList.toggle('active', button.dataset.mobileView === 'tasks'));
  renderMobile();
}

function renderMobile() {
  applyTranslations();
  const root = $('#mobileContent');
  if (state.activeTaskId) root.innerHTML = mobileTaskDetail(state.tasks.find(x => x.id === state.activeTaskId));
  else if (state.mobileView === 'tasks') root.innerHTML = mobileTasks();
  else if (state.mobileView === 'issues') root.innerHTML = mobileIssues();
  else if (state.mobileView === 'shift') root.innerHTML = mobileShift();
  else root.innerHTML = mobileTraining();
  bindMobile();
  renderIcons(root);
  updateMobileIssueCount();
}

function mobileTasks() {
  let mine = state.tasks.filter(x => x.assignee === 'Nino' && x.status !== 'Completed');
  mine = mine.sort((a, b) => priorities.indexOf(a.priority) - priorities.indexOf(b.priority) || a.floor - b.floor);
  const total = state.tasks.filter(x => x.assignee === 'Nino').length;
  const done = state.tasks.filter(x => x.assignee === 'Nino' && x.status === 'Completed').length;
  const progress = Math.round(done / Math.max(total, 1) * 100);
  return `<article class="shift-card"><div><small>${t('todayProgress')}</small><strong>${done} / ${total} ${t('completed')}</strong></div><div class="shift-ring">${progress}%</div></article>
    <div class="mobile-section-head"><h3>${t('myTasks')}</h3><small>${mine.length} ${t('remaining')}</small></div>
    <div class="mobile-task-list">${mine.map(task => `<article class="mobile-task ${priorityClass(task.priority)}"><div class="task-top"><span class="pill ${priorityClass(task.priority)}">${localizePriority(task.priority)}</span><span class="pill ${statusClass(task.status)}">${localizeStatus(task.status)}</span></div>
      <h3>${task.location}</h3><p>${task.type}</p><div class="task-meta"><span>${t('floor')}<br><b>${task.floor}</b></span><span>${t('deadline')}<br><b>${task.deadline}</b></span></div>
      <div class="voice-controls"><button class="btn voice-btn voice-task" data-id="${task.id}"><span data-icon="play-circle"></span>${t('readAloud')}</button><button class="btn voice-stop stop-voice" type="button">■ ${t('stopVoice')}</button></div>
      <button class="btn ${task.status === 'Pending' ? 'secondary' : 'primary'} full open-mobile-task" data-id="${task.id}">${task.status === 'Pending' ? t('startTask') : t('openTask')}</button></article>`).join('')}</div>`;
}

function mobileTaskDetail(task) {
  if (!task) return '';
  const items = ensureChecklistItems(task);
  const done = items.filter(item => item.checked).length;
  const isReclean = task.status === 'Re-clean' || task.reclean;
  const room = findInventoryRoom(task);
  return `<div class="task-detail-top"><button id="backTasks" class="icon-button">←</button><div class="task-detail-title"><span class="pill ${priorityClass(task.priority)}">${localizePriority(task.priority)}</span><h2>${task.location}</h2></div><button id="voiceDetail" class="icon-button voice-icon" title="${t('readAloud')}">🔊</button><button id="stopVoiceDetail" class="icon-button voice-stop-icon" title="${t('stopVoice')}">■</button></div>
    ${isReclean ? `<article class="detail-card reclean-message"><b>Re-clean</b><p>${task.recleanReason || ''}</p></article>` : ''}
    <article class="detail-card"><div class="detail-grid"><div><span>${t('deadline')}</span><b>${task.deadline}</b></div><div><span>${t('expected')}</span><b>${task.expected} min</b></div><div><span>${t('roomStatus')}</span><b>${localizeRoomStatus(room?.roomStatus || 'Dirty')}</b></div><div><span>${t('status')}</span><b>${localizeStatus(task.status)}</b></div></div></article>
    <article class="timer-card"><div><small>${t('cleaningTime')}</small><div class="timer-value" id="timerValue">${formatTime(task.elapsed)}</div></div><button id="pauseResume" class="btn secondary">${task.paused ? t('resume') : t('pause')}</button></article>
    <section class="check-group"><div class="mobile-check-head"><div><h3>${t('checklist')} · ${done}/${items.length}</h3><small>${localizeTaskType(task.type)}</small></div><button id="addMobileChecklistItem" class="check-add-btn">+ ${t('addCustomTask')}</button></div><progress class="progress-line" value="${done}" max="${Math.max(items.length,1)}"></progress>${items.map((item, i) => `<label class="check-item"><input class="task-check" data-i="${i}" type="checkbox" ${item.checked ? 'checked' : ''}><span>${localizedLabel(item.label)}${item.required === false ? `<small>${t('optionalItem')}</small>` : ''}</span>${item.custom ? `<button type="button" class="mobile-remove-custom" data-i="${i}" title="${t('remove')}">×</button>` : ''}</label>`).join('')}</section>
    <section class="form-panel"><h3>${t('photoProof')}</h3><p class="photo-help">${t('beforeHint')}</p><label class="photo-zone"><span data-icon="camera"></span>${t('takeBefore')}<input id="beforeInput" type="file" accept="image/*" capture="environment" multiple></label><div class="photo-preview">${(task.beforePhotos || []).map(p => photoThumb(p, true, 'beforePhotos', task.id)).join('')}</div>
      <p class="photo-help after-help">${t('afterHint')}</p><label class="photo-zone after-zone"><span data-icon="camera"></span>${t('takeAfter')}<input id="afterInput" type="file" accept="image/*" capture="environment" multiple></label><div class="photo-preview">${(task.afterPhotos || []).map(p => photoThumb(p, true, 'afterPhotos', task.id)).join('')}</div>
    </section>
    <section class="form-panel"><h3>${t('reportIssue')}</h3><select id="issueType"><option>${t('maintenance')}</option><option>${t('brokenItem')}</option><option>${t('missingItem')}</option><option>${t('other')}</option></select><textarea id="issueText" placeholder="${t('describeIssue')}"></textarea>
      <label class="photo-zone"><span data-icon="camera"></span>${t('addIssuePhoto')}<input id="issueInput" type="file" accept="image/*" capture="environment" multiple></label><div class="photo-preview">${(task.issuePhotos || []).map(p => photoThumb(p, true, 'issuePhotos', task.id)).join('')}</div>
      <button id="sendIssue" class="btn primary full">${t('sendIssue')}</button></section>
    <div class="sticky-actions"><button id="backTasks2" class="btn ghost">${t('back')}</button><button id="submitTask" class="btn primary">${t('submitReview')}</button></div>`;
}

function readFiles(files) {
  return Promise.all([...files].map(file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(photo(file.name, reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  })));
}

async function attachPhotos(input, task, key) {
  const files = input.files;
  if (!files?.length) return;
  const items = await readFiles(files);
  task[key] = [...(task[key] || []), ...items];
  toast(t('photoAttached'));
  renderMobile();
}

function removeTaskPhoto(taskId, key, photoId) {
  const task = state.tasks.find(x => x.id === Number(taskId));
  if (!task || !task[key]) return;
  task[key] = task[key].filter(p => p.id !== photoId);
  renderMobile();
}

function sendIssueFromTask(task) {
  const text = $('#issueText')?.value.trim() || '';
  const photos = (task.issuePhotos || []).map(item => ({ ...item }));
  if (!text && !photos.length) return toast(t('issueNeedContent'));

  const issue = {
    id: Date.now(),
    taskId: task.id,
    roomNumber: task.roomNumber,
    location: task.location,
    floor: task.floor,
    type: $('#issueType')?.value || t('other'),
    text: text || t('issueNoDescription'),
    reportedBy: state.mobileUserName,
    status: 'Open',
    createdAt: new Date().toISOString(),
    time: new Date().toLocaleTimeString(currentLocale(), { hour: '2-digit', minute: '2-digit' }),
    photos
  };

  state.issues.unshift(issue);
  state.lastSentIssueId = issue.id;
  task.issuePhotos = [];
  const issueText = $('#issueText');
  if (issueText) issueText.value = '';
  renderNav();
  renderMobile();
  toast(t('issueSent'));
}
function submitTask(task) {
  const items = ensureChecklistItems(task);
  if (items.some(item => item.required !== false && !item.checked)) return toast(t('completeChecklist'));
  if (!task.afterPhotos?.length) return toast(t('afterRequired'));
  stopTimer();
  task.status = 'Review';
  setRoomStatusForTask(task, 'Inspection');
  task.reclean = false;
  task.aiQuality = runDemoAiQuality(task);
  state.activeTaskId = null;
  toast(`${task.location} ${t('submitted')}`);
  renderMobile();
}

function startTimer(task) {
  stopTimer();
  state.timerInterval = setInterval(() => {
    task.elapsed += 1;
    const timer = $('#timerValue');
    if (timer) timer.textContent = formatTime(task.elapsed);
  }, 1000);
}
function stopTimer() { clearInterval(state.timerInterval); state.timerInterval = null; }

function stopVoiceReader(showToast = true) {
  if (window.houseOpsAudio) {
    try { window.houseOpsAudio.pause(); window.houseOpsAudio.currentTime = 0; } catch (_) {}
    window.houseOpsAudio = null;
  }
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  state.voiceUtterance = null;
  if (showToast) toast(t('voiceStopped'));
}

function speakTask(task, detailed = false) {
  if (!task) return;
  stopVoiceReader(false);
  if (!('speechSynthesis' in window)) return toast(t('voiceUnsupported'));
  const labels = roomChecklist[state.lang] || roomChecklist.en;
  let message;
  if (state.lang === 'ru') {
    message = `Приоритет ${localizePriority(task.priority)}. ${task.location}. ${task.type}. Дедлайн ${task.deadline}. Норматив ${task.expected} минут.` +
      (task.reclean ? ` Требуется повторная уборка. Причина: ${task.recleanReason || ''}.` : '') +
      (detailed ? ` Чек-лист: ${labels.join('. ')}.` : '');
  } else if (state.lang === 'ka') {
    message = `${localizePriority(task.priority)} პრიორიტეტი. ${task.location}. ${task.type}. დედლაინი ${task.deadline}. მოსალოდნელი დრო ${task.expected} წუთი.` +
      (task.reclean ? ` საჭიროა ხელახალი დალაგება. მიზეზი: ${task.recleanReason || ''}.` : '') +
      (detailed ? ` ჩეკლისტი: ${labels.join('. ')}.` : '');
  } else {
    message = `${localizePriority(task.priority)} priority. ${task.location}. ${task.type}. Deadline ${task.deadline}. Expected time ${task.expected} minutes.` +
      (task.reclean ? ` Re-clean required. Reason: ${task.recleanReason || ''}.` : '') +
      (detailed ? ` Checklist: ${labels.join('. ')}.` : '');
  }
  const target = currentLocale();
  const utterance = new SpeechSynthesisUtterance(message);
  utterance.lang = target;
  utterance.rate = 0.92;
  const voices = window.speechSynthesis.getVoices();
  const code = target.slice(0, 2).toLowerCase();
  const voice = voices.find(v => v.lang.toLowerCase() === target.toLowerCase()) || voices.find(v => v.lang.toLowerCase().startsWith(code));
  if (voice) utterance.voice = voice;
  utterance.onend = utterance.onerror = () => { if (state.voiceUtterance === utterance) state.voiceUtterance = null; };
  state.voiceUtterance = utterance;
  window.speechSynthesis.speak(utterance);
  toast(t('voiceReading'));
}

function mobileIssues() {
  const drafts = state.tasks.filter(task => task.assignee === state.mobileUserName && task.issuePhotos?.length);
  const mine = state.issues
    .filter(issue => issue.reportedBy === state.mobileUserName)
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));

  return `${drafts.length ? `<div class="mobile-section-head"><h3>${t('draftIssues')}</h3><small>${drafts.length}</small></div>
    <div class="mobile-task-list">${drafts.map(task => `<article class="issue-card issue-card-draft">
        <div class="task-top"><span class="pill status-draft">${t('draft')}</span><small>${task.location}</small></div>
        <h3>${task.location}</h3>
        <p>${t('draftIssueHint')}</p>
        <div class="photo-preview sent-issue-photos">${task.issuePhotos.map(p => photoThumb(p)).join('')}</div>
        <button class="btn ghost full open-draft-issue" data-id="${task.id}">${t('continueIssue')}</button>
      </article>`).join('')}</div>` : ''}
    <div class="mobile-section-head"><h3>${t('issues')}</h3><small>${mine.length}</small></div>
    <div class="mobile-task-list">${mine.length ? mine.map(issue => {
      const justSent = issue.id === state.lastSentIssueId;
      return `<article class="issue-card ${justSent ? 'issue-card-confirmed' : ''}">
        <div class="task-top"><span class="pill ${justSent ? 'status-completed' : 'status-pending'}">${justSent ? t('issueReceipt') : issue.status}</span><small>${issue.time}</small></div>
        <h3>${issue.location} · ${issue.type}</h3>
        <p>${issue.text}</p>
        <div class="issue-meta mobile-issue-meta"><span>${t('floor')}: <b>${issue.floor ?? '—'}</b></span><span>${t('reportedAt')}: <b>${issue.time}</b></span></div>
        <div class="photo-preview sent-issue-photos">${issue.photos?.length ? issue.photos.map(p => photoThumb(p)).join('') : `<div class="photo-empty">${t('noPhoto')}</div>`}</div>
        ${justSent ? `<div class="issue-receipt-note"><b>✓ ${t('issueReceipt')}</b><span>${t('issueReceiptText')}</span></div>` : ''}
      </article>`;
    }).join('') : `<article class="issue-card">${t('noIssues')}</article>`}</div>`;
}

function updateMobileIssueCount() {
  const draftCount = state.tasks.filter(task => task.assignee === state.mobileUserName && task.issuePhotos?.length).length;
  const sentCount = state.issues.filter(issue => issue.reportedBy === state.mobileUserName).length;
  const count = draftCount + sentCount;
  const label = $('[data-mobile-label="issues"]');
  if (label) label.textContent = `${t('issues')}${count ? ` (${count})` : ''}`;
}
function mobileShift() {
  const mine = state.tasks.filter(x => x.assignee === 'Nino');
  const completed = mine.filter(x => x.status === 'Completed').length;
  const tracked = Math.round(mine.reduce((sum, x) => sum + x.elapsed, 0) / 60);
  return `<article class="shift-card"><div><small>${t('shiftStatus')}</small><strong>08:00–16:00</strong></div><div class="shift-ring">6h 12m</div></article><article class="detail-card" style="margin-top:12px"><div class="detail-grid"><div><span>${t('tasksCompleted')}</span><b>${completed} / ${mine.length}</b></div><div><span>${t('trackedCleaning')}</span><b>${tracked} min</b></div><div><span>${t('qualityScore')}</span><b>96%</b></div><div><span>${t('recleans')}</span><b>${mine.filter(x => x.status === 'Re-clean').length}</b></div></div></article>`;
}

function mobileTraining() {
  const lessons = state.training.lessons;
  const passed = lessons.filter(x => x.passed).length;
  const progress = Math.round(passed / lessons.length * 100);
  if (state.training.activeLessonId) {
    const lesson = lessons.find(x => x.id === state.training.activeLessonId);
    const content = lessonContent[lesson.id];
    const examples = content.examples[state.lang] || content.examples.en;
    return `<div class="task-detail-top"><button id="backLearning" class="icon-button">←</button><div><span class="eyebrow dark">${t('trainingModule')}</span><h2>${content.title[state.lang] || content.title.en}</h2></div></div>
      <article class="learning-video-card"><video id="lessonVideo" controls playsinline preload="metadata" src="assets/training/${lesson.video}"></video><div class="learning-video-copy"><b>${content.title[state.lang] || content.title.en}</b><p>${content.desc[state.lang] || content.desc.en}</p><div class="lesson-tags"><span class="lesson-tag">Video ${lesson.duration}</span><span class="lesson-tag">Quiz</span><span class="lesson-tag">Examples</span></div></div></article>
      <article class="quiz-card"><span class="eyebrow dark">${t('practicalExamples')}</span><div class="learning-examples"><div class="learning-example"><b>✓ ${t('goodExample')}</b><span>${examples[0][0]} — ${examples[0][1]}</span></div><div class="learning-example"><b>× ${t('badExample')}</b><span>${examples[1][0]} — ${examples[1][1]}</span></div></div></article>
      <article class="quiz-card"><span class="eyebrow dark">${t('quickCheck')}</span><h3>${t('quizTitle')}</h3>${quizForm(lesson.id)}${lesson.score ? `<div class="quiz-score">Score: ${lesson.score}%</div>` : ''}</article>`;
  }
  return `<article class="shift-card"><div><small>${t('onboardingProgress')}</small><strong>${passed} / ${lessons.length} ${t('modulesPassed')}</strong></div><div class="shift-ring">${progress}%</div></article>
    <div class="mobile-section-head"><h3>${t('trainingTitle')}</h3><small>${t('videosTests')}</small></div>
    <div class="learning-list">${lessons.map((lesson, i) => { const content = lessonContent[lesson.id]; return `<article class="learning-card"><div class="learning-order">${i + 1}</div><div class="learning-copy"><div class="task-top"><span class="pill ${lesson.passed ? 'status-completed' : 'status-pending'}">${lesson.passed ? t('passed') : t('toDo')}</span><small>${lesson.duration}</small></div><h3>${content.title[state.lang] || content.title.en}</h3><p>${content.desc[state.lang] || content.desc.en}</p><button class="btn ${lesson.passed ? 'ghost' : 'primary'} full open-lesson" data-id="${lesson.id}">${lesson.passed ? t('reviewLesson') : t('startLesson')}</button></div></article>`; }).join('')}</div>`;
}

function quizForm(id) {
  const quiz = lessonContent[id].quiz[state.lang] || lessonContent[id].quiz.en;
  return `<form id="lessonQuiz">${quiz.map((item, i) => `<fieldset class="quiz-question"><legend>${i + 1}. ${item[0]}</legend>${item[1].map((option, j) => `<label><input type="radio" name="q${i}" value="${j}"> ${option}</label>`).join('')}</fieldset>`).join('')}<button class="btn primary full">${t('submitTest')}</button><p class="quiz-note">${t('passMark')}</p></form>`;
}

function bindLearning() {
  $('#backLearning')?.addEventListener('click', () => { state.training.activeLessonId = null; renderMobile(); });
  $$('.open-lesson').forEach(button => button.onclick = () => { state.training.activeLessonId = Number(button.dataset.id); renderMobile(); });
  const video = $('#lessonVideo');
  if (video) video.onended = () => { const lesson = state.training.lessons.find(x => x.id === state.training.activeLessonId); if (lesson) lesson.watched = true; };
  const form = $('#lessonQuiz');
  if (form) form.onsubmit = event => {
    event.preventDefault();
    const lesson = state.training.lessons.find(x => x.id === state.training.activeLessonId);
    const quiz = lessonContent[lesson.id].quiz[state.lang] || lessonContent[lesson.id].quiz.en;
    let score = 0;
    quiz.forEach((item, i) => { const pick = form.querySelector(`input[name="q${i}"]:checked`); if (pick && Number(pick.value) === item[2]) score += 1; });
    const pct = Math.round(score / quiz.length * 100);
    lesson.score = pct;
    lesson.passed = pct >= 50;
    toast(lesson.passed ? `${t('testPassed')}: ${pct}%` : `${pct}%. ${t('tryAgain')}`);
    renderMobile();
  };
}

function bindMobile() {
  bindPhotoPreview();
  $$('.photo-remove').forEach(button => button.onclick = event => {
    event.stopPropagation();
    removeTaskPhoto(button.dataset.taskId, button.dataset.photoKey, button.dataset.photoId);
  });

  if (state.activeTaskId) {
    const task = state.tasks.find(x => x.id === state.activeTaskId);
    $('#backTasks').onclick = $('#backTasks2').onclick = () => { state.activeTaskId = null; stopTimer(); stopVoiceReader(false); renderMobile(); };
    $('#voiceDetail').onclick = () => speakTask(task, true);
    $('#stopVoiceDetail').onclick = () => stopVoiceReader();
    $('#pauseResume').onclick = () => { task.paused = !task.paused; task.paused ? stopTimer() : startTimer(task); renderMobile(); };
    $$('.task-check').forEach(box => box.onchange = () => { ensureChecklistItems(task)[Number(box.dataset.i)].checked = box.checked; persist(); });
    $('#addMobileChecklistItem')?.addEventListener('click', () => { const text = prompt(t('addCustomTask')); if (!text?.trim()) return; ensureChecklistItems(task).push({ id: `mobile-custom-${Date.now()}`, label: labelSet(text.trim(), text.trim(), text.trim()), required: false, checked: false, custom: true }); persist(); renderMobile(); });
    $$('.mobile-remove-custom').forEach(button => button.onclick = event => { event.preventDefault(); event.stopPropagation(); const i = Number(button.dataset.i); const items = ensureChecklistItems(task); if (items[i]?.custom) items.splice(i, 1); persist(); renderMobile(); });
    $('#beforeInput').addEventListener('change', event => attachPhotos(event.target, task, 'beforePhotos'));
    $('#afterInput').addEventListener('change', event => attachPhotos(event.target, task, 'afterPhotos'));
    $('#issueInput').addEventListener('change', event => attachPhotos(event.target, task, 'issuePhotos'));
    $('#sendIssue').onclick = () => sendIssueFromTask(task);
    $('#submitTask').onclick = () => submitTask(task);
    if (task.status === 'In Progress' && !task.paused) startTimer(task);
    if (state.jumpToIssueForm) {
      state.jumpToIssueForm = false;
      const panel = $('#sendIssue')?.closest('.form-panel');
      panel?.classList.add('issue-form-highlight');
      panel?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => panel?.classList.remove('issue-form-highlight'), 2200);
    }
    return;
  }

  $$('.open-mobile-task').forEach(button => button.onclick = () => {
    const task = state.tasks.find(x => x.id === Number(button.dataset.id));
    if (!task) return;
    stopVoiceReader(false);
    if (task.status === 'Pending') { task.status = 'In Progress'; setRoomStatusForTask(task, 'Cleaning'); persist(); }
    state.activeTaskId = task.id;
    renderMobile();
  });
  $$('.voice-task').forEach(button => button.onclick = () => speakTask(state.tasks.find(x => x.id === Number(button.dataset.id)), false));
  $$('.stop-voice').forEach(button => button.onclick = () => stopVoiceReader());
  $$('.open-draft-issue').forEach(button => button.onclick = () => {
    const task = state.tasks.find(x => x.id === Number(button.dataset.id));
    if (!task) return;
    stopVoiceReader(false);
    if (task.status === 'Pending') { task.status = 'In Progress'; setRoomStatusForTask(task, 'Cleaning'); persist(); }
    state.activeTaskId = task.id;
    state.jumpToIssueForm = true;
    renderMobile();
  });
  if (state.mobileView === 'learn') bindLearning();
}

function bindPhotoPreview() {
  $$('[data-preview-photo]').forEach(img => {
    img.onclick = () => openModal(`<div class="modal-head"><h2>${t('photoPreview')}</h2><button class="modal-close">×</button></div><img class="photo-lightbox" src="${img.src}" alt="${img.alt}">`, true);
  });
  $$('.modal-close').forEach(button => button.onclick = closeModal);
}

function initAssistant() {
  const button = $('#aiAssistantBtn');
  const panel = $('#aiPanel');
  const close = $('#aiPanelClose');
  button.onclick = () => {
    panel.classList.toggle('hidden');
    panel.setAttribute('aria-hidden', panel.classList.contains('hidden') ? 'true' : 'false');
    $('#aiMessages').innerHTML = `<div class="ai-msg from-ai">${state.desktopRole === 'supervisor' ? t('optimizationNote') : t('weeklyPerformanceText')}</div>`;
    $('#aiActions').innerHTML = state.desktopRole === 'supervisor'
      ? `<button class="ai-action-btn" data-ai-jump="maker"><span data-icon="wand"></span>${t('taskMaker')}</button><button class="ai-action-btn" data-ai-jump="reviews"><span data-icon="image"></span>${t('reviews')}</button>`
      : `<button class="ai-action-btn" data-ai-jump="dashboard"><span data-icon="chart"></span>${t('weeklyPerformance')}</button>`;
    $$('[data-ai-jump]').forEach(item => item.onclick = () => { panel.classList.add('hidden'); showDesktopView(item.dataset.aiJump); });
    renderIcons(panel);
  };
  close.onclick = () => panel.classList.add('hidden');
}

// Static event wiring
$$('.language-switcher button').forEach(button => button.onclick = () => {
  stopVoiceReader(false);
  state.lang = button.dataset.lang;
  applyTranslations();
  if (!$('#desktopApp').classList.contains('hidden')) { renderNav(); showDesktopView(state.currentDesktopView); }
  if (!$('#mobileApp').classList.contains('hidden')) renderMobile();
});
$$('.role-option').forEach(button => button.onclick = () => {
  $$('.role-option').forEach(x => x.classList.remove('active'));
  button.classList.add('active');
  state.role = button.dataset.role;
});
$('#loginForm').onsubmit = event => {
  event.preventDefault();
  state.role === 'housekeeper' ? showMobile(false) : showDesktop(state.role);
};
$('#desktopLogout').onclick = logout;
$('#mobileLogout').onclick = logout;
$('#mobileAdminBack').onclick = () => showDesktop(state.desktopRole);
$('#alertsButton').onclick = () => state.desktopRole === 'supervisor' ? showDesktopView('issues') : showDesktopView('dashboard');
$('#createTaskButton').onclick = openQuickTaskModal;
$('#openMobilePreview').onclick = () => showMobile(true);
$$('.mobile-nav-item').forEach(button => button.onclick = () => {
  state.mobileView = button.dataset.mobileView;
  state.activeTaskId = null;
  stopTimer();
  stopVoiceReader(false);
  $$('.mobile-nav-item').forEach(x => x.classList.toggle('active', x === button));
  renderMobile();
});

initAssistant();
applyTranslations();

// Live cross-tab sync: if another tab (e.g. the supervisor console) updates
// localStorage, pick up the change immediately instead of waiting for a
// manual refresh.
window.addEventListener('storage', event => {
  if (event.key !== STORAGE_KEY || !event.newValue) return;
  hydrateState();
  if (!$('#desktopApp').classList.contains('hidden')) { renderNav(); showDesktopView(state.currentDesktopView); }
  if (!$('#mobileApp').classList.contains('hidden')) renderMobile();
});
