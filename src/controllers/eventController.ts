import { Request, Response } from 'express';
import * as eventService from '../services/eventService';

export const addEvent = async (req: Request, res: Response) => {
  try {
    const newEvent = await eventService.addEvent(req.body);
    res.status(201).json({
      error: false,
      message: 'Event added successfully!',
      statusCode: 201,
      data: newEvent,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'Internal Server Error',
      statusCode: 500,
      data: {},
    });
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const updatedEvent = await eventService.updateEvent(id, req.body);

    if (!updatedEvent) {
      return res.status(404).json({
        error: true,
        message: 'Event not found',
        statusCode: 404,
        data: {},
      });
    }

    res.status(200).json({
      error: false,
      message: 'Event updated successfully!',
      statusCode: 200,
      data: updatedEvent,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'Internal Server Error',
      statusCode: 500,
      data: {},
    });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const success = await eventService.deleteEvent(id);

    if (!success) {
      return res.status(404).json({
        error: true,
        message: 'Event not found',
        statusCode: 404,
        data: {},
      });
    }

    res.status(200).json({
      error: false,
      message: 'Event deleted successfully!',
      statusCode: 200,
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'Internal Server Error',
      statusCode: 500,
      data: {},
    });
  }
};

export const getEventById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const event = await eventService.getEventById(id);

    if (!event) {
      return res.status(404).json({
        error: true,
        message: 'Event not found',
        statusCode: 404,
        data: {},
      });
    }

    res.status(200).json({
      error: false,
      message: 'Event found successfully!',
      statusCode: 200,
      data: event,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'Internal Server Error',
      statusCode: 500,
      data: {},
    });
  }
};

export const listEvents = async (req: Request, res: Response) => {
  const filters = req.query;

  try {
    const events = await eventService.listEvents(filters);

    res.status(200).json({
      error: false,
      message: 'Events found successfully!',
      statusCode: 200,
      data: events,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: 'Internal Server Error',
      statusCode: 500,
      data: {},
    });
  }
};
