package org.jhipster.inventoryservice.repository;

import org.jhipster.inventoryservice.domain.StockItem;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the StockItem entity.
 */
@SuppressWarnings("unused")
@Repository
public interface StockItemRepository extends JpaRepository<StockItem, Long> {

}
