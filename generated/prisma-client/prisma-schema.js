module.exports = {
  typeDefs: /* GraphQL */ `
    type AggregateCategory {
      count: Int!
    }

    type AggregateDescriptor {
      count: Int!
    }

    type AggregateEvent {
      count: Int!
    }

    type AggregateIndicator {
      count: Int!
    }

    type AggregateKeyword {
      count: Int!
    }

    type AggregateScenario {
      count: Int!
    }

    type BatchPayload {
      count: Long!
    }

    type Category {
      event: Event
      id: ID!
      name: String!
    }

    type CategoryConnection {
      pageInfo: PageInfo!
      edges: [CategoryEdge]!
      aggregate: AggregateCategory!
    }

    input CategoryCreateInput {
      event: EventCreateOneWithoutCategoriesInput
      name: String!
    }

    input CategoryCreateManyWithoutEventInput {
      create: [CategoryCreateWithoutEventInput!]
      connect: [CategoryWhereUniqueInput!]
    }

    input CategoryCreateWithoutEventInput {
      name: String!
    }

    type CategoryEdge {
      node: Category!
      cursor: String!
    }

    enum CategoryOrderByInput {
      id_ASC
      id_DESC
      name_ASC
      name_DESC
      createdAt_ASC
      createdAt_DESC
      updatedAt_ASC
      updatedAt_DESC
    }

    type CategoryPreviousValues {
      id: ID!
      name: String!
    }

    input CategoryScalarWhereInput {
      id: ID
      id_not: ID
      id_in: [ID!]
      id_not_in: [ID!]
      id_lt: ID
      id_lte: ID
      id_gt: ID
      id_gte: ID
      id_contains: ID
      id_not_contains: ID
      id_starts_with: ID
      id_not_starts_with: ID
      id_ends_with: ID
      id_not_ends_with: ID
      name: String
      name_not: String
      name_in: [String!]
      name_not_in: [String!]
      name_lt: String
      name_lte: String
      name_gt: String
      name_gte: String
      name_contains: String
      name_not_contains: String
      name_starts_with: String
      name_not_starts_with: String
      name_ends_with: String
      name_not_ends_with: String
      AND: [CategoryScalarWhereInput!]
      OR: [CategoryScalarWhereInput!]
      NOT: [CategoryScalarWhereInput!]
    }

    type CategorySubscriptionPayload {
      mutation: MutationType!
      node: Category
      updatedFields: [String!]
      previousValues: CategoryPreviousValues
    }

    input CategorySubscriptionWhereInput {
      mutation_in: [MutationType!]
      updatedFields_contains: String
      updatedFields_contains_every: [String!]
      updatedFields_contains_some: [String!]
      node: CategoryWhereInput
      AND: [CategorySubscriptionWhereInput!]
      OR: [CategorySubscriptionWhereInput!]
      NOT: [CategorySubscriptionWhereInput!]
    }

    input CategoryUpdateInput {
      event: EventUpdateOneWithoutCategoriesInput
      name: String
    }

    input CategoryUpdateManyDataInput {
      name: String
    }

    input CategoryUpdateManyMutationInput {
      name: String
    }

    input CategoryUpdateManyWithoutEventInput {
      create: [CategoryCreateWithoutEventInput!]
      delete: [CategoryWhereUniqueInput!]
      connect: [CategoryWhereUniqueInput!]
      disconnect: [CategoryWhereUniqueInput!]
      update: [CategoryUpdateWithWhereUniqueWithoutEventInput!]
      upsert: [CategoryUpsertWithWhereUniqueWithoutEventInput!]
      deleteMany: [CategoryScalarWhereInput!]
      updateMany: [CategoryUpdateManyWithWhereNestedInput!]
    }

    input CategoryUpdateManyWithWhereNestedInput {
      where: CategoryScalarWhereInput!
      data: CategoryUpdateManyDataInput!
    }

    input CategoryUpdateWithoutEventDataInput {
      name: String
    }

    input CategoryUpdateWithWhereUniqueWithoutEventInput {
      where: CategoryWhereUniqueInput!
      data: CategoryUpdateWithoutEventDataInput!
    }

    input CategoryUpsertWithWhereUniqueWithoutEventInput {
      where: CategoryWhereUniqueInput!
      update: CategoryUpdateWithoutEventDataInput!
      create: CategoryCreateWithoutEventInput!
    }

    input CategoryWhereInput {
      event: EventWhereInput
      id: ID
      id_not: ID
      id_in: [ID!]
      id_not_in: [ID!]
      id_lt: ID
      id_lte: ID
      id_gt: ID
      id_gte: ID
      id_contains: ID
      id_not_contains: ID
      id_starts_with: ID
      id_not_starts_with: ID
      id_ends_with: ID
      id_not_ends_with: ID
      name: String
      name_not: String
      name_in: [String!]
      name_not_in: [String!]
      name_lt: String
      name_lte: String
      name_gt: String
      name_gte: String
      name_contains: String
      name_not_contains: String
      name_starts_with: String
      name_not_starts_with: String
      name_ends_with: String
      name_not_ends_with: String
      AND: [CategoryWhereInput!]
      OR: [CategoryWhereInput!]
      NOT: [CategoryWhereInput!]
    }

    input CategoryWhereUniqueInput {
      id: ID
    }

    scalar DateTime

    type Descriptor {
      events(
        where: EventWhereInput
        orderBy: EventOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Event!]
      id: ID!
      tag: String!
    }

    type DescriptorConnection {
      pageInfo: PageInfo!
      edges: [DescriptorEdge]!
      aggregate: AggregateDescriptor!
    }

    input DescriptorCreateInput {
      events: EventCreateManyWithoutDescriptorsInput
      tag: String!
    }

    input DescriptorCreateManyWithoutEventsInput {
      create: [DescriptorCreateWithoutEventsInput!]
      connect: [DescriptorWhereUniqueInput!]
    }

    input DescriptorCreateWithoutEventsInput {
      tag: String!
    }

    type DescriptorEdge {
      node: Descriptor!
      cursor: String!
    }

    enum DescriptorOrderByInput {
      id_ASC
      id_DESC
      tag_ASC
      tag_DESC
      createdAt_ASC
      createdAt_DESC
      updatedAt_ASC
      updatedAt_DESC
    }

    type DescriptorPreviousValues {
      id: ID!
      tag: String!
    }

    input DescriptorScalarWhereInput {
      id: ID
      id_not: ID
      id_in: [ID!]
      id_not_in: [ID!]
      id_lt: ID
      id_lte: ID
      id_gt: ID
      id_gte: ID
      id_contains: ID
      id_not_contains: ID
      id_starts_with: ID
      id_not_starts_with: ID
      id_ends_with: ID
      id_not_ends_with: ID
      tag: String
      tag_not: String
      tag_in: [String!]
      tag_not_in: [String!]
      tag_lt: String
      tag_lte: String
      tag_gt: String
      tag_gte: String
      tag_contains: String
      tag_not_contains: String
      tag_starts_with: String
      tag_not_starts_with: String
      tag_ends_with: String
      tag_not_ends_with: String
      AND: [DescriptorScalarWhereInput!]
      OR: [DescriptorScalarWhereInput!]
      NOT: [DescriptorScalarWhereInput!]
    }

    type DescriptorSubscriptionPayload {
      mutation: MutationType!
      node: Descriptor
      updatedFields: [String!]
      previousValues: DescriptorPreviousValues
    }

    input DescriptorSubscriptionWhereInput {
      mutation_in: [MutationType!]
      updatedFields_contains: String
      updatedFields_contains_every: [String!]
      updatedFields_contains_some: [String!]
      node: DescriptorWhereInput
      AND: [DescriptorSubscriptionWhereInput!]
      OR: [DescriptorSubscriptionWhereInput!]
      NOT: [DescriptorSubscriptionWhereInput!]
    }

    input DescriptorUpdateInput {
      events: EventUpdateManyWithoutDescriptorsInput
      tag: String
    }

    input DescriptorUpdateManyDataInput {
      tag: String
    }

    input DescriptorUpdateManyMutationInput {
      tag: String
    }

    input DescriptorUpdateManyWithoutEventsInput {
      create: [DescriptorCreateWithoutEventsInput!]
      delete: [DescriptorWhereUniqueInput!]
      connect: [DescriptorWhereUniqueInput!]
      disconnect: [DescriptorWhereUniqueInput!]
      update: [DescriptorUpdateWithWhereUniqueWithoutEventsInput!]
      upsert: [DescriptorUpsertWithWhereUniqueWithoutEventsInput!]
      deleteMany: [DescriptorScalarWhereInput!]
      updateMany: [DescriptorUpdateManyWithWhereNestedInput!]
    }

    input DescriptorUpdateManyWithWhereNestedInput {
      where: DescriptorScalarWhereInput!
      data: DescriptorUpdateManyDataInput!
    }

    input DescriptorUpdateWithoutEventsDataInput {
      tag: String
    }

    input DescriptorUpdateWithWhereUniqueWithoutEventsInput {
      where: DescriptorWhereUniqueInput!
      data: DescriptorUpdateWithoutEventsDataInput!
    }

    input DescriptorUpsertWithWhereUniqueWithoutEventsInput {
      where: DescriptorWhereUniqueInput!
      update: DescriptorUpdateWithoutEventsDataInput!
      create: DescriptorCreateWithoutEventsInput!
    }

    input DescriptorWhereInput {
      events_every: EventWhereInput
      events_some: EventWhereInput
      events_none: EventWhereInput
      id: ID
      id_not: ID
      id_in: [ID!]
      id_not_in: [ID!]
      id_lt: ID
      id_lte: ID
      id_gt: ID
      id_gte: ID
      id_contains: ID
      id_not_contains: ID
      id_starts_with: ID
      id_not_starts_with: ID
      id_ends_with: ID
      id_not_ends_with: ID
      tag: String
      tag_not: String
      tag_in: [String!]
      tag_not_in: [String!]
      tag_lt: String
      tag_lte: String
      tag_gt: String
      tag_gte: String
      tag_contains: String
      tag_not_contains: String
      tag_starts_with: String
      tag_not_starts_with: String
      tag_ends_with: String
      tag_not_ends_with: String
      AND: [DescriptorWhereInput!]
      OR: [DescriptorWhereInput!]
      NOT: [DescriptorWhereInput!]
    }

    input DescriptorWhereUniqueInput {
      id: ID
    }

    type Event {
      categories(
        where: CategoryWhereInput
        orderBy: CategoryOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Category!]
      category: String
      crawlDate: DateTime!
      description: String!
      descriptors(
        where: DescriptorWhereInput
        orderBy: DescriptorOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Descriptor!]
      eventDate: DateTime
      href: String
      id: ID!
      indicators(
        where: IndicatorWhereInput
        orderBy: IndicatorOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Indicator!]
      unread: Boolean
      source: String
      title: String!
    }

    type EventConnection {
      pageInfo: PageInfo!
      edges: [EventEdge]!
      aggregate: AggregateEvent!
    }

    input EventCreateInput {
      categories: CategoryCreateManyWithoutEventInput
      category: String
      crawlDate: DateTime!
      description: String!
      descriptors: DescriptorCreateManyWithoutEventsInput
      eventDate: DateTime
      href: String
      indicators: IndicatorCreateManyWithoutEventsInput
      unread: Boolean
      source: String
      title: String!
    }

    input EventCreateManyWithoutDescriptorsInput {
      create: [EventCreateWithoutDescriptorsInput!]
      connect: [EventWhereUniqueInput!]
    }

    input EventCreateManyWithoutIndicatorsInput {
      create: [EventCreateWithoutIndicatorsInput!]
      connect: [EventWhereUniqueInput!]
    }

    input EventCreateOneWithoutCategoriesInput {
      create: EventCreateWithoutCategoriesInput
      connect: EventWhereUniqueInput
    }

    input EventCreateWithoutCategoriesInput {
      category: String
      crawlDate: DateTime!
      description: String!
      descriptors: DescriptorCreateManyWithoutEventsInput
      eventDate: DateTime
      href: String
      indicators: IndicatorCreateManyWithoutEventsInput
      unread: Boolean
      source: String
      title: String!
    }

    input EventCreateWithoutDescriptorsInput {
      categories: CategoryCreateManyWithoutEventInput
      category: String
      crawlDate: DateTime!
      description: String!
      eventDate: DateTime
      href: String
      indicators: IndicatorCreateManyWithoutEventsInput
      unread: Boolean
      source: String
      title: String!
    }

    input EventCreateWithoutIndicatorsInput {
      categories: CategoryCreateManyWithoutEventInput
      category: String
      crawlDate: DateTime!
      description: String!
      descriptors: DescriptorCreateManyWithoutEventsInput
      eventDate: DateTime
      href: String
      unread: Boolean
      source: String
      title: String!
    }

    type EventEdge {
      node: Event!
      cursor: String!
    }

    enum EventOrderByInput {
      category_ASC
      category_DESC
      crawlDate_ASC
      crawlDate_DESC
      description_ASC
      description_DESC
      eventDate_ASC
      eventDate_DESC
      href_ASC
      href_DESC
      id_ASC
      id_DESC
      unread_ASC
      unread_DESC
      source_ASC
      source_DESC
      title_ASC
      title_DESC
      createdAt_ASC
      createdAt_DESC
      updatedAt_ASC
      updatedAt_DESC
    }

    type EventPreviousValues {
      category: String
      crawlDate: DateTime!
      description: String!
      eventDate: DateTime
      href: String
      id: ID!
      unread: Boolean
      source: String
      title: String!
    }

    input EventScalarWhereInput {
      category: String
      category_not: String
      category_in: [String!]
      category_not_in: [String!]
      category_lt: String
      category_lte: String
      category_gt: String
      category_gte: String
      category_contains: String
      category_not_contains: String
      category_starts_with: String
      category_not_starts_with: String
      category_ends_with: String
      category_not_ends_with: String
      crawlDate: DateTime
      crawlDate_not: DateTime
      crawlDate_in: [DateTime!]
      crawlDate_not_in: [DateTime!]
      crawlDate_lt: DateTime
      crawlDate_lte: DateTime
      crawlDate_gt: DateTime
      crawlDate_gte: DateTime
      description: String
      description_not: String
      description_in: [String!]
      description_not_in: [String!]
      description_lt: String
      description_lte: String
      description_gt: String
      description_gte: String
      description_contains: String
      description_not_contains: String
      description_starts_with: String
      description_not_starts_with: String
      description_ends_with: String
      description_not_ends_with: String
      eventDate: DateTime
      eventDate_not: DateTime
      eventDate_in: [DateTime!]
      eventDate_not_in: [DateTime!]
      eventDate_lt: DateTime
      eventDate_lte: DateTime
      eventDate_gt: DateTime
      eventDate_gte: DateTime
      href: String
      href_not: String
      href_in: [String!]
      href_not_in: [String!]
      href_lt: String
      href_lte: String
      href_gt: String
      href_gte: String
      href_contains: String
      href_not_contains: String
      href_starts_with: String
      href_not_starts_with: String
      href_ends_with: String
      href_not_ends_with: String
      id: ID
      id_not: ID
      id_in: [ID!]
      id_not_in: [ID!]
      id_lt: ID
      id_lte: ID
      id_gt: ID
      id_gte: ID
      id_contains: ID
      id_not_contains: ID
      id_starts_with: ID
      id_not_starts_with: ID
      id_ends_with: ID
      id_not_ends_with: ID
      unread: Boolean
      unread_not: Boolean
      source: String
      source_not: String
      source_in: [String!]
      source_not_in: [String!]
      source_lt: String
      source_lte: String
      source_gt: String
      source_gte: String
      source_contains: String
      source_not_contains: String
      source_starts_with: String
      source_not_starts_with: String
      source_ends_with: String
      source_not_ends_with: String
      title: String
      title_not: String
      title_in: [String!]
      title_not_in: [String!]
      title_lt: String
      title_lte: String
      title_gt: String
      title_gte: String
      title_contains: String
      title_not_contains: String
      title_starts_with: String
      title_not_starts_with: String
      title_ends_with: String
      title_not_ends_with: String
      AND: [EventScalarWhereInput!]
      OR: [EventScalarWhereInput!]
      NOT: [EventScalarWhereInput!]
    }

    type EventSubscriptionPayload {
      mutation: MutationType!
      node: Event
      updatedFields: [String!]
      previousValues: EventPreviousValues
    }

    input EventSubscriptionWhereInput {
      mutation_in: [MutationType!]
      updatedFields_contains: String
      updatedFields_contains_every: [String!]
      updatedFields_contains_some: [String!]
      node: EventWhereInput
      AND: [EventSubscriptionWhereInput!]
      OR: [EventSubscriptionWhereInput!]
      NOT: [EventSubscriptionWhereInput!]
    }

    input EventUpdateInput {
      categories: CategoryUpdateManyWithoutEventInput
      category: String
      crawlDate: DateTime
      description: String
      descriptors: DescriptorUpdateManyWithoutEventsInput
      eventDate: DateTime
      href: String
      indicators: IndicatorUpdateManyWithoutEventsInput
      unread: Boolean
      source: String
      title: String
    }

    input EventUpdateManyDataInput {
      category: String
      crawlDate: DateTime
      description: String
      eventDate: DateTime
      href: String
      unread: Boolean
      source: String
      title: String
    }

    input EventUpdateManyMutationInput {
      category: String
      crawlDate: DateTime
      description: String
      eventDate: DateTime
      href: String
      unread: Boolean
      source: String
      title: String
    }

    input EventUpdateManyWithoutDescriptorsInput {
      create: [EventCreateWithoutDescriptorsInput!]
      delete: [EventWhereUniqueInput!]
      connect: [EventWhereUniqueInput!]
      disconnect: [EventWhereUniqueInput!]
      update: [EventUpdateWithWhereUniqueWithoutDescriptorsInput!]
      upsert: [EventUpsertWithWhereUniqueWithoutDescriptorsInput!]
      deleteMany: [EventScalarWhereInput!]
      updateMany: [EventUpdateManyWithWhereNestedInput!]
    }

    input EventUpdateManyWithoutIndicatorsInput {
      create: [EventCreateWithoutIndicatorsInput!]
      delete: [EventWhereUniqueInput!]
      connect: [EventWhereUniqueInput!]
      disconnect: [EventWhereUniqueInput!]
      update: [EventUpdateWithWhereUniqueWithoutIndicatorsInput!]
      upsert: [EventUpsertWithWhereUniqueWithoutIndicatorsInput!]
      deleteMany: [EventScalarWhereInput!]
      updateMany: [EventUpdateManyWithWhereNestedInput!]
    }

    input EventUpdateManyWithWhereNestedInput {
      where: EventScalarWhereInput!
      data: EventUpdateManyDataInput!
    }

    input EventUpdateOneWithoutCategoriesInput {
      create: EventCreateWithoutCategoriesInput
      update: EventUpdateWithoutCategoriesDataInput
      upsert: EventUpsertWithoutCategoriesInput
      delete: Boolean
      disconnect: Boolean
      connect: EventWhereUniqueInput
    }

    input EventUpdateWithoutCategoriesDataInput {
      category: String
      crawlDate: DateTime
      description: String
      descriptors: DescriptorUpdateManyWithoutEventsInput
      eventDate: DateTime
      href: String
      indicators: IndicatorUpdateManyWithoutEventsInput
      unread: Boolean
      source: String
      title: String
    }

    input EventUpdateWithoutDescriptorsDataInput {
      categories: CategoryUpdateManyWithoutEventInput
      category: String
      crawlDate: DateTime
      description: String
      eventDate: DateTime
      href: String
      indicators: IndicatorUpdateManyWithoutEventsInput
      unread: Boolean
      source: String
      title: String
    }

    input EventUpdateWithoutIndicatorsDataInput {
      categories: CategoryUpdateManyWithoutEventInput
      category: String
      crawlDate: DateTime
      description: String
      descriptors: DescriptorUpdateManyWithoutEventsInput
      eventDate: DateTime
      href: String
      unread: Boolean
      source: String
      title: String
    }

    input EventUpdateWithWhereUniqueWithoutDescriptorsInput {
      where: EventWhereUniqueInput!
      data: EventUpdateWithoutDescriptorsDataInput!
    }

    input EventUpdateWithWhereUniqueWithoutIndicatorsInput {
      where: EventWhereUniqueInput!
      data: EventUpdateWithoutIndicatorsDataInput!
    }

    input EventUpsertWithoutCategoriesInput {
      update: EventUpdateWithoutCategoriesDataInput!
      create: EventCreateWithoutCategoriesInput!
    }

    input EventUpsertWithWhereUniqueWithoutDescriptorsInput {
      where: EventWhereUniqueInput!
      update: EventUpdateWithoutDescriptorsDataInput!
      create: EventCreateWithoutDescriptorsInput!
    }

    input EventUpsertWithWhereUniqueWithoutIndicatorsInput {
      where: EventWhereUniqueInput!
      update: EventUpdateWithoutIndicatorsDataInput!
      create: EventCreateWithoutIndicatorsInput!
    }

    input EventWhereInput {
      categories_every: CategoryWhereInput
      categories_some: CategoryWhereInput
      categories_none: CategoryWhereInput
      category: String
      category_not: String
      category_in: [String!]
      category_not_in: [String!]
      category_lt: String
      category_lte: String
      category_gt: String
      category_gte: String
      category_contains: String
      category_not_contains: String
      category_starts_with: String
      category_not_starts_with: String
      category_ends_with: String
      category_not_ends_with: String
      crawlDate: DateTime
      crawlDate_not: DateTime
      crawlDate_in: [DateTime!]
      crawlDate_not_in: [DateTime!]
      crawlDate_lt: DateTime
      crawlDate_lte: DateTime
      crawlDate_gt: DateTime
      crawlDate_gte: DateTime
      description: String
      description_not: String
      description_in: [String!]
      description_not_in: [String!]
      description_lt: String
      description_lte: String
      description_gt: String
      description_gte: String
      description_contains: String
      description_not_contains: String
      description_starts_with: String
      description_not_starts_with: String
      description_ends_with: String
      description_not_ends_with: String
      descriptors_every: DescriptorWhereInput
      descriptors_some: DescriptorWhereInput
      descriptors_none: DescriptorWhereInput
      eventDate: DateTime
      eventDate_not: DateTime
      eventDate_in: [DateTime!]
      eventDate_not_in: [DateTime!]
      eventDate_lt: DateTime
      eventDate_lte: DateTime
      eventDate_gt: DateTime
      eventDate_gte: DateTime
      href: String
      href_not: String
      href_in: [String!]
      href_not_in: [String!]
      href_lt: String
      href_lte: String
      href_gt: String
      href_gte: String
      href_contains: String
      href_not_contains: String
      href_starts_with: String
      href_not_starts_with: String
      href_ends_with: String
      href_not_ends_with: String
      id: ID
      id_not: ID
      id_in: [ID!]
      id_not_in: [ID!]
      id_lt: ID
      id_lte: ID
      id_gt: ID
      id_gte: ID
      id_contains: ID
      id_not_contains: ID
      id_starts_with: ID
      id_not_starts_with: ID
      id_ends_with: ID
      id_not_ends_with: ID
      indicators_every: IndicatorWhereInput
      indicators_some: IndicatorWhereInput
      indicators_none: IndicatorWhereInput
      unread: Boolean
      unread_not: Boolean
      source: String
      source_not: String
      source_in: [String!]
      source_not_in: [String!]
      source_lt: String
      source_lte: String
      source_gt: String
      source_gte: String
      source_contains: String
      source_not_contains: String
      source_starts_with: String
      source_not_starts_with: String
      source_ends_with: String
      source_not_ends_with: String
      title: String
      title_not: String
      title_in: [String!]
      title_not_in: [String!]
      title_lt: String
      title_lte: String
      title_gt: String
      title_gte: String
      title_contains: String
      title_not_contains: String
      title_starts_with: String
      title_not_starts_with: String
      title_ends_with: String
      title_not_ends_with: String
      AND: [EventWhereInput!]
      OR: [EventWhereInput!]
      NOT: [EventWhereInput!]
    }

    input EventWhereUniqueInput {
      id: ID
    }

    type Indicator {
      events(
        where: EventWhereInput
        orderBy: EventOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Event!]
      id: ID!
      keyword: Keyword
      scenarios(
        where: ScenarioWhereInput
        orderBy: ScenarioOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Scenario!]
      title: String!
    }

    type IndicatorConnection {
      pageInfo: PageInfo!
      edges: [IndicatorEdge]!
      aggregate: AggregateIndicator!
    }

    input IndicatorCreateInput {
      events: EventCreateManyWithoutIndicatorsInput
      keyword: KeywordCreateOneWithoutIndicatorsInput
      scenarios: ScenarioCreateManyWithoutIndicatorsInput
      title: String!
    }

    input IndicatorCreateManyWithoutEventsInput {
      create: [IndicatorCreateWithoutEventsInput!]
      connect: [IndicatorWhereUniqueInput!]
    }

    input IndicatorCreateManyWithoutKeywordInput {
      create: [IndicatorCreateWithoutKeywordInput!]
      connect: [IndicatorWhereUniqueInput!]
    }

    input IndicatorCreateManyWithoutScenariosInput {
      create: [IndicatorCreateWithoutScenariosInput!]
      connect: [IndicatorWhereUniqueInput!]
    }

    input IndicatorCreateWithoutEventsInput {
      keyword: KeywordCreateOneWithoutIndicatorsInput
      scenarios: ScenarioCreateManyWithoutIndicatorsInput
      title: String!
    }

    input IndicatorCreateWithoutKeywordInput {
      events: EventCreateManyWithoutIndicatorsInput
      scenarios: ScenarioCreateManyWithoutIndicatorsInput
      title: String!
    }

    input IndicatorCreateWithoutScenariosInput {
      events: EventCreateManyWithoutIndicatorsInput
      keyword: KeywordCreateOneWithoutIndicatorsInput
      title: String!
    }

    type IndicatorEdge {
      node: Indicator!
      cursor: String!
    }

    enum IndicatorOrderByInput {
      id_ASC
      id_DESC
      title_ASC
      title_DESC
      createdAt_ASC
      createdAt_DESC
      updatedAt_ASC
      updatedAt_DESC
    }

    type IndicatorPreviousValues {
      id: ID!
      title: String!
    }

    input IndicatorScalarWhereInput {
      id: ID
      id_not: ID
      id_in: [ID!]
      id_not_in: [ID!]
      id_lt: ID
      id_lte: ID
      id_gt: ID
      id_gte: ID
      id_contains: ID
      id_not_contains: ID
      id_starts_with: ID
      id_not_starts_with: ID
      id_ends_with: ID
      id_not_ends_with: ID
      title: String
      title_not: String
      title_in: [String!]
      title_not_in: [String!]
      title_lt: String
      title_lte: String
      title_gt: String
      title_gte: String
      title_contains: String
      title_not_contains: String
      title_starts_with: String
      title_not_starts_with: String
      title_ends_with: String
      title_not_ends_with: String
      AND: [IndicatorScalarWhereInput!]
      OR: [IndicatorScalarWhereInput!]
      NOT: [IndicatorScalarWhereInput!]
    }

    type IndicatorSubscriptionPayload {
      mutation: MutationType!
      node: Indicator
      updatedFields: [String!]
      previousValues: IndicatorPreviousValues
    }

    input IndicatorSubscriptionWhereInput {
      mutation_in: [MutationType!]
      updatedFields_contains: String
      updatedFields_contains_every: [String!]
      updatedFields_contains_some: [String!]
      node: IndicatorWhereInput
      AND: [IndicatorSubscriptionWhereInput!]
      OR: [IndicatorSubscriptionWhereInput!]
      NOT: [IndicatorSubscriptionWhereInput!]
    }

    input IndicatorUpdateInput {
      events: EventUpdateManyWithoutIndicatorsInput
      keyword: KeywordUpdateOneWithoutIndicatorsInput
      scenarios: ScenarioUpdateManyWithoutIndicatorsInput
      title: String
    }

    input IndicatorUpdateManyDataInput {
      title: String
    }

    input IndicatorUpdateManyMutationInput {
      title: String
    }

    input IndicatorUpdateManyWithoutEventsInput {
      create: [IndicatorCreateWithoutEventsInput!]
      delete: [IndicatorWhereUniqueInput!]
      connect: [IndicatorWhereUniqueInput!]
      disconnect: [IndicatorWhereUniqueInput!]
      update: [IndicatorUpdateWithWhereUniqueWithoutEventsInput!]
      upsert: [IndicatorUpsertWithWhereUniqueWithoutEventsInput!]
      deleteMany: [IndicatorScalarWhereInput!]
      updateMany: [IndicatorUpdateManyWithWhereNestedInput!]
    }

    input IndicatorUpdateManyWithoutKeywordInput {
      create: [IndicatorCreateWithoutKeywordInput!]
      delete: [IndicatorWhereUniqueInput!]
      connect: [IndicatorWhereUniqueInput!]
      disconnect: [IndicatorWhereUniqueInput!]
      update: [IndicatorUpdateWithWhereUniqueWithoutKeywordInput!]
      upsert: [IndicatorUpsertWithWhereUniqueWithoutKeywordInput!]
      deleteMany: [IndicatorScalarWhereInput!]
      updateMany: [IndicatorUpdateManyWithWhereNestedInput!]
    }

    input IndicatorUpdateManyWithoutScenariosInput {
      create: [IndicatorCreateWithoutScenariosInput!]
      delete: [IndicatorWhereUniqueInput!]
      connect: [IndicatorWhereUniqueInput!]
      disconnect: [IndicatorWhereUniqueInput!]
      update: [IndicatorUpdateWithWhereUniqueWithoutScenariosInput!]
      upsert: [IndicatorUpsertWithWhereUniqueWithoutScenariosInput!]
      deleteMany: [IndicatorScalarWhereInput!]
      updateMany: [IndicatorUpdateManyWithWhereNestedInput!]
    }

    input IndicatorUpdateManyWithWhereNestedInput {
      where: IndicatorScalarWhereInput!
      data: IndicatorUpdateManyDataInput!
    }

    input IndicatorUpdateWithoutEventsDataInput {
      keyword: KeywordUpdateOneWithoutIndicatorsInput
      scenarios: ScenarioUpdateManyWithoutIndicatorsInput
      title: String
    }

    input IndicatorUpdateWithoutKeywordDataInput {
      events: EventUpdateManyWithoutIndicatorsInput
      scenarios: ScenarioUpdateManyWithoutIndicatorsInput
      title: String
    }

    input IndicatorUpdateWithoutScenariosDataInput {
      events: EventUpdateManyWithoutIndicatorsInput
      keyword: KeywordUpdateOneWithoutIndicatorsInput
      title: String
    }

    input IndicatorUpdateWithWhereUniqueWithoutEventsInput {
      where: IndicatorWhereUniqueInput!
      data: IndicatorUpdateWithoutEventsDataInput!
    }

    input IndicatorUpdateWithWhereUniqueWithoutKeywordInput {
      where: IndicatorWhereUniqueInput!
      data: IndicatorUpdateWithoutKeywordDataInput!
    }

    input IndicatorUpdateWithWhereUniqueWithoutScenariosInput {
      where: IndicatorWhereUniqueInput!
      data: IndicatorUpdateWithoutScenariosDataInput!
    }

    input IndicatorUpsertWithWhereUniqueWithoutEventsInput {
      where: IndicatorWhereUniqueInput!
      update: IndicatorUpdateWithoutEventsDataInput!
      create: IndicatorCreateWithoutEventsInput!
    }

    input IndicatorUpsertWithWhereUniqueWithoutKeywordInput {
      where: IndicatorWhereUniqueInput!
      update: IndicatorUpdateWithoutKeywordDataInput!
      create: IndicatorCreateWithoutKeywordInput!
    }

    input IndicatorUpsertWithWhereUniqueWithoutScenariosInput {
      where: IndicatorWhereUniqueInput!
      update: IndicatorUpdateWithoutScenariosDataInput!
      create: IndicatorCreateWithoutScenariosInput!
    }

    input IndicatorWhereInput {
      events_every: EventWhereInput
      events_some: EventWhereInput
      events_none: EventWhereInput
      id: ID
      id_not: ID
      id_in: [ID!]
      id_not_in: [ID!]
      id_lt: ID
      id_lte: ID
      id_gt: ID
      id_gte: ID
      id_contains: ID
      id_not_contains: ID
      id_starts_with: ID
      id_not_starts_with: ID
      id_ends_with: ID
      id_not_ends_with: ID
      keyword: KeywordWhereInput
      scenarios_every: ScenarioWhereInput
      scenarios_some: ScenarioWhereInput
      scenarios_none: ScenarioWhereInput
      title: String
      title_not: String
      title_in: [String!]
      title_not_in: [String!]
      title_lt: String
      title_lte: String
      title_gt: String
      title_gte: String
      title_contains: String
      title_not_contains: String
      title_starts_with: String
      title_not_starts_with: String
      title_ends_with: String
      title_not_ends_with: String
      AND: [IndicatorWhereInput!]
      OR: [IndicatorWhereInput!]
      NOT: [IndicatorWhereInput!]
    }

    input IndicatorWhereUniqueInput {
      id: ID
    }

    type Keyword {
      id: ID!
      indicators(
        where: IndicatorWhereInput
        orderBy: IndicatorOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Indicator!]
      searchterm: String!
    }

    type KeywordConnection {
      pageInfo: PageInfo!
      edges: [KeywordEdge]!
      aggregate: AggregateKeyword!
    }

    input KeywordCreateInput {
      indicators: IndicatorCreateManyWithoutKeywordInput
      searchterm: String!
    }

    input KeywordCreateOneWithoutIndicatorsInput {
      create: KeywordCreateWithoutIndicatorsInput
      connect: KeywordWhereUniqueInput
    }

    input KeywordCreateWithoutIndicatorsInput {
      searchterm: String!
    }

    type KeywordEdge {
      node: Keyword!
      cursor: String!
    }

    enum KeywordOrderByInput {
      id_ASC
      id_DESC
      searchterm_ASC
      searchterm_DESC
      createdAt_ASC
      createdAt_DESC
      updatedAt_ASC
      updatedAt_DESC
    }

    type KeywordPreviousValues {
      id: ID!
      searchterm: String!
    }

    type KeywordSubscriptionPayload {
      mutation: MutationType!
      node: Keyword
      updatedFields: [String!]
      previousValues: KeywordPreviousValues
    }

    input KeywordSubscriptionWhereInput {
      mutation_in: [MutationType!]
      updatedFields_contains: String
      updatedFields_contains_every: [String!]
      updatedFields_contains_some: [String!]
      node: KeywordWhereInput
      AND: [KeywordSubscriptionWhereInput!]
      OR: [KeywordSubscriptionWhereInput!]
      NOT: [KeywordSubscriptionWhereInput!]
    }

    input KeywordUpdateInput {
      indicators: IndicatorUpdateManyWithoutKeywordInput
      searchterm: String
    }

    input KeywordUpdateManyMutationInput {
      searchterm: String
    }

    input KeywordUpdateOneWithoutIndicatorsInput {
      create: KeywordCreateWithoutIndicatorsInput
      update: KeywordUpdateWithoutIndicatorsDataInput
      upsert: KeywordUpsertWithoutIndicatorsInput
      delete: Boolean
      disconnect: Boolean
      connect: KeywordWhereUniqueInput
    }

    input KeywordUpdateWithoutIndicatorsDataInput {
      searchterm: String
    }

    input KeywordUpsertWithoutIndicatorsInput {
      update: KeywordUpdateWithoutIndicatorsDataInput!
      create: KeywordCreateWithoutIndicatorsInput!
    }

    input KeywordWhereInput {
      id: ID
      id_not: ID
      id_in: [ID!]
      id_not_in: [ID!]
      id_lt: ID
      id_lte: ID
      id_gt: ID
      id_gte: ID
      id_contains: ID
      id_not_contains: ID
      id_starts_with: ID
      id_not_starts_with: ID
      id_ends_with: ID
      id_not_ends_with: ID
      indicators_every: IndicatorWhereInput
      indicators_some: IndicatorWhereInput
      indicators_none: IndicatorWhereInput
      searchterm: String
      searchterm_not: String
      searchterm_in: [String!]
      searchterm_not_in: [String!]
      searchterm_lt: String
      searchterm_lte: String
      searchterm_gt: String
      searchterm_gte: String
      searchterm_contains: String
      searchterm_not_contains: String
      searchterm_starts_with: String
      searchterm_not_starts_with: String
      searchterm_ends_with: String
      searchterm_not_ends_with: String
      AND: [KeywordWhereInput!]
      OR: [KeywordWhereInput!]
      NOT: [KeywordWhereInput!]
    }

    input KeywordWhereUniqueInput {
      id: ID
      searchterm: String
    }

    scalar Long

    type Mutation {
      createCategory(data: CategoryCreateInput!): Category!
      updateCategory(
        data: CategoryUpdateInput!
        where: CategoryWhereUniqueInput!
      ): Category
      updateManyCategories(
        data: CategoryUpdateManyMutationInput!
        where: CategoryWhereInput
      ): BatchPayload!
      upsertCategory(
        where: CategoryWhereUniqueInput!
        create: CategoryCreateInput!
        update: CategoryUpdateInput!
      ): Category!
      deleteCategory(where: CategoryWhereUniqueInput!): Category
      deleteManyCategories(where: CategoryWhereInput): BatchPayload!
      createDescriptor(data: DescriptorCreateInput!): Descriptor!
      updateDescriptor(
        data: DescriptorUpdateInput!
        where: DescriptorWhereUniqueInput!
      ): Descriptor
      updateManyDescriptors(
        data: DescriptorUpdateManyMutationInput!
        where: DescriptorWhereInput
      ): BatchPayload!
      upsertDescriptor(
        where: DescriptorWhereUniqueInput!
        create: DescriptorCreateInput!
        update: DescriptorUpdateInput!
      ): Descriptor!
      deleteDescriptor(where: DescriptorWhereUniqueInput!): Descriptor
      deleteManyDescriptors(where: DescriptorWhereInput): BatchPayload!
      createEvent(data: EventCreateInput!): Event!
      updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
      updateManyEvents(
        data: EventUpdateManyMutationInput!
        where: EventWhereInput
      ): BatchPayload!
      upsertEvent(
        where: EventWhereUniqueInput!
        create: EventCreateInput!
        update: EventUpdateInput!
      ): Event!
      deleteEvent(where: EventWhereUniqueInput!): Event
      deleteManyEvents(where: EventWhereInput): BatchPayload!
      createIndicator(data: IndicatorCreateInput!): Indicator!
      updateIndicator(
        data: IndicatorUpdateInput!
        where: IndicatorWhereUniqueInput!
      ): Indicator
      updateManyIndicators(
        data: IndicatorUpdateManyMutationInput!
        where: IndicatorWhereInput
      ): BatchPayload!
      upsertIndicator(
        where: IndicatorWhereUniqueInput!
        create: IndicatorCreateInput!
        update: IndicatorUpdateInput!
      ): Indicator!
      deleteIndicator(where: IndicatorWhereUniqueInput!): Indicator
      deleteManyIndicators(where: IndicatorWhereInput): BatchPayload!
      createKeyword(data: KeywordCreateInput!): Keyword!
      updateKeyword(
        data: KeywordUpdateInput!
        where: KeywordWhereUniqueInput!
      ): Keyword
      updateManyKeywords(
        data: KeywordUpdateManyMutationInput!
        where: KeywordWhereInput
      ): BatchPayload!
      upsertKeyword(
        where: KeywordWhereUniqueInput!
        create: KeywordCreateInput!
        update: KeywordUpdateInput!
      ): Keyword!
      deleteKeyword(where: KeywordWhereUniqueInput!): Keyword
      deleteManyKeywords(where: KeywordWhereInput): BatchPayload!
      createScenario(data: ScenarioCreateInput!): Scenario!
      updateScenario(
        data: ScenarioUpdateInput!
        where: ScenarioWhereUniqueInput!
      ): Scenario
      updateManyScenarios(
        data: ScenarioUpdateManyMutationInput!
        where: ScenarioWhereInput
      ): BatchPayload!
      upsertScenario(
        where: ScenarioWhereUniqueInput!
        create: ScenarioCreateInput!
        update: ScenarioUpdateInput!
      ): Scenario!
      deleteScenario(where: ScenarioWhereUniqueInput!): Scenario
      deleteManyScenarios(where: ScenarioWhereInput): BatchPayload!
    }

    enum MutationType {
      CREATED
      UPDATED
      DELETED
    }

    interface Node {
      id: ID!
    }

    type PageInfo {
      hasNextPage: Boolean!
      hasPreviousPage: Boolean!
      startCursor: String
      endCursor: String
    }

    type Query {
      category(where: CategoryWhereUniqueInput!): Category
      categories(
        where: CategoryWhereInput
        orderBy: CategoryOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Category]!
      categoriesConnection(
        where: CategoryWhereInput
        orderBy: CategoryOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): CategoryConnection!
      descriptor(where: DescriptorWhereUniqueInput!): Descriptor
      descriptors(
        where: DescriptorWhereInput
        orderBy: DescriptorOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Descriptor]!
      descriptorsConnection(
        where: DescriptorWhereInput
        orderBy: DescriptorOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): DescriptorConnection!
      event(where: EventWhereUniqueInput!): Event
      events(
        where: EventWhereInput
        orderBy: EventOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Event]!
      eventsConnection(
        where: EventWhereInput
        orderBy: EventOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): EventConnection!
      indicator(where: IndicatorWhereUniqueInput!): Indicator
      indicators(
        where: IndicatorWhereInput
        orderBy: IndicatorOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Indicator]!
      indicatorsConnection(
        where: IndicatorWhereInput
        orderBy: IndicatorOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): IndicatorConnection!
      keyword(where: KeywordWhereUniqueInput!): Keyword
      keywords(
        where: KeywordWhereInput
        orderBy: KeywordOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Keyword]!
      keywordsConnection(
        where: KeywordWhereInput
        orderBy: KeywordOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): KeywordConnection!
      scenario(where: ScenarioWhereUniqueInput!): Scenario
      scenarios(
        where: ScenarioWhereInput
        orderBy: ScenarioOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Scenario]!
      scenariosConnection(
        where: ScenarioWhereInput
        orderBy: ScenarioOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): ScenarioConnection!
      node(id: ID!): Node
    }

    type Scenario {
      id: ID!
      title: String!
      description: String!
      indicators(
        where: IndicatorWhereInput
        orderBy: IndicatorOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Indicator!]
    }

    type ScenarioConnection {
      pageInfo: PageInfo!
      edges: [ScenarioEdge]!
      aggregate: AggregateScenario!
    }

    input ScenarioCreateInput {
      title: String!
      description: String!
      indicators: IndicatorCreateManyWithoutScenariosInput
    }

    input ScenarioCreateManyWithoutIndicatorsInput {
      create: [ScenarioCreateWithoutIndicatorsInput!]
      connect: [ScenarioWhereUniqueInput!]
    }

    input ScenarioCreateWithoutIndicatorsInput {
      title: String!
      description: String!
    }

    type ScenarioEdge {
      node: Scenario!
      cursor: String!
    }

    enum ScenarioOrderByInput {
      id_ASC
      id_DESC
      title_ASC
      title_DESC
      description_ASC
      description_DESC
      createdAt_ASC
      createdAt_DESC
      updatedAt_ASC
      updatedAt_DESC
    }

    type ScenarioPreviousValues {
      id: ID!
      title: String!
      description: String!
    }

    input ScenarioScalarWhereInput {
      id: ID
      id_not: ID
      id_in: [ID!]
      id_not_in: [ID!]
      id_lt: ID
      id_lte: ID
      id_gt: ID
      id_gte: ID
      id_contains: ID
      id_not_contains: ID
      id_starts_with: ID
      id_not_starts_with: ID
      id_ends_with: ID
      id_not_ends_with: ID
      title: String
      title_not: String
      title_in: [String!]
      title_not_in: [String!]
      title_lt: String
      title_lte: String
      title_gt: String
      title_gte: String
      title_contains: String
      title_not_contains: String
      title_starts_with: String
      title_not_starts_with: String
      title_ends_with: String
      title_not_ends_with: String
      description: String
      description_not: String
      description_in: [String!]
      description_not_in: [String!]
      description_lt: String
      description_lte: String
      description_gt: String
      description_gte: String
      description_contains: String
      description_not_contains: String
      description_starts_with: String
      description_not_starts_with: String
      description_ends_with: String
      description_not_ends_with: String
      AND: [ScenarioScalarWhereInput!]
      OR: [ScenarioScalarWhereInput!]
      NOT: [ScenarioScalarWhereInput!]
    }

    type ScenarioSubscriptionPayload {
      mutation: MutationType!
      node: Scenario
      updatedFields: [String!]
      previousValues: ScenarioPreviousValues
    }

    input ScenarioSubscriptionWhereInput {
      mutation_in: [MutationType!]
      updatedFields_contains: String
      updatedFields_contains_every: [String!]
      updatedFields_contains_some: [String!]
      node: ScenarioWhereInput
      AND: [ScenarioSubscriptionWhereInput!]
      OR: [ScenarioSubscriptionWhereInput!]
      NOT: [ScenarioSubscriptionWhereInput!]
    }

    input ScenarioUpdateInput {
      title: String
      description: String
      indicators: IndicatorUpdateManyWithoutScenariosInput
    }

    input ScenarioUpdateManyDataInput {
      title: String
      description: String
    }

    input ScenarioUpdateManyMutationInput {
      title: String
      description: String
    }

    input ScenarioUpdateManyWithoutIndicatorsInput {
      create: [ScenarioCreateWithoutIndicatorsInput!]
      delete: [ScenarioWhereUniqueInput!]
      connect: [ScenarioWhereUniqueInput!]
      disconnect: [ScenarioWhereUniqueInput!]
      update: [ScenarioUpdateWithWhereUniqueWithoutIndicatorsInput!]
      upsert: [ScenarioUpsertWithWhereUniqueWithoutIndicatorsInput!]
      deleteMany: [ScenarioScalarWhereInput!]
      updateMany: [ScenarioUpdateManyWithWhereNestedInput!]
    }

    input ScenarioUpdateManyWithWhereNestedInput {
      where: ScenarioScalarWhereInput!
      data: ScenarioUpdateManyDataInput!
    }

    input ScenarioUpdateWithoutIndicatorsDataInput {
      title: String
      description: String
    }

    input ScenarioUpdateWithWhereUniqueWithoutIndicatorsInput {
      where: ScenarioWhereUniqueInput!
      data: ScenarioUpdateWithoutIndicatorsDataInput!
    }

    input ScenarioUpsertWithWhereUniqueWithoutIndicatorsInput {
      where: ScenarioWhereUniqueInput!
      update: ScenarioUpdateWithoutIndicatorsDataInput!
      create: ScenarioCreateWithoutIndicatorsInput!
    }

    input ScenarioWhereInput {
      id: ID
      id_not: ID
      id_in: [ID!]
      id_not_in: [ID!]
      id_lt: ID
      id_lte: ID
      id_gt: ID
      id_gte: ID
      id_contains: ID
      id_not_contains: ID
      id_starts_with: ID
      id_not_starts_with: ID
      id_ends_with: ID
      id_not_ends_with: ID
      title: String
      title_not: String
      title_in: [String!]
      title_not_in: [String!]
      title_lt: String
      title_lte: String
      title_gt: String
      title_gte: String
      title_contains: String
      title_not_contains: String
      title_starts_with: String
      title_not_starts_with: String
      title_ends_with: String
      title_not_ends_with: String
      description: String
      description_not: String
      description_in: [String!]
      description_not_in: [String!]
      description_lt: String
      description_lte: String
      description_gt: String
      description_gte: String
      description_contains: String
      description_not_contains: String
      description_starts_with: String
      description_not_starts_with: String
      description_ends_with: String
      description_not_ends_with: String
      indicators_every: IndicatorWhereInput
      indicators_some: IndicatorWhereInput
      indicators_none: IndicatorWhereInput
      AND: [ScenarioWhereInput!]
      OR: [ScenarioWhereInput!]
      NOT: [ScenarioWhereInput!]
    }

    input ScenarioWhereUniqueInput {
      id: ID
    }

    type Subscription {
      category(
        where: CategorySubscriptionWhereInput
      ): CategorySubscriptionPayload
      descriptor(
        where: DescriptorSubscriptionWhereInput
      ): DescriptorSubscriptionPayload
      event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
      indicator(
        where: IndicatorSubscriptionWhereInput
      ): IndicatorSubscriptionPayload
      keyword(where: KeywordSubscriptionWhereInput): KeywordSubscriptionPayload
      scenario(
        where: ScenarioSubscriptionWhereInput
      ): ScenarioSubscriptionPayload
    }
  `
};
