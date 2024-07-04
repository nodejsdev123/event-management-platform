"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eventController_1 = require("../controllers/eventController");
const router = (0, express_1.Router)();
router.post('/events', eventController_1.addEvent);
router.put('/events/:id', eventController_1.updateEvent);
router.delete('/events/:id', eventController_1.deleteEvent);
router.get('/events/:id', eventController_1.getEventById);
router.get('/events', eventController_1.listEvents);
exports.default = router;